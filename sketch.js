
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let bird,birdAnim = [],birdSpritedata,birdSpritesheet;
let engine, world;
let pipes = [],pipe;

function preload() {
  birdSpritedata = loadJSON("bird.json");
  birdSpritesheet = loadImage("bird.png");
}

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  let birdFrames = birdSpritedata.frames;

  for(let i = 0; i < birdFrames.length; i++){
    let pos = birdFrames[i].position;
    let img = birdSpritesheet.get(pos.x,pos.y,pos.w,pos.h);
    birdAnim.push(img);
  }
console.log(birdAnim)
  bird = new Bird(50,200,50,50,birdAnim);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  bird.show();
  bird.animate();
  createPipes();
  for (let i = 0; i < pipes.length; i++) {
    pipes[i].show();
  }
}

function keyPressed()
{
  if(keyCode === UP_ARROW || keyCode === 32)
  {
    bird.fly();
  }
}

function createPipes() {
  if(frameCount % 100 === 0)
  {
    pipe = new Pipe(800,400,20,20);
    pipes.push(pipe);
  }
}



/*                                     Notas da prof 
E ai Bruno? tudo bom?
O Código em si não era o problema...
A primeira coisa que eu fiz pra resolver foi ver se o array de animação realmente estava
recebendo as imagens, sabe? Ai usei um console.log nele e minhas suspeitas estavam corretas!
abri o arquivo json e lá estava o problema, você estava passando os parametros lá de forma incorreta,
lembre-se que tudo é um grande *ARRAY*, logo devemos usar cochetes no inicio, estava com chaves.
Então arrumei as chaves e colchetes, tirei tudo o que o computador não precisava ler, e mudei o nome do parametro 
no json de "frame" para "position". Tudo certo, o projeto funcionou!  Ai tomei a liberdade de mudar
o tamanho do passarinho e a força sobre ele, mas veja ai o que você acha :D

Haaaapy Hacking!
*/