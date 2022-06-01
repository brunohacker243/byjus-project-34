
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let bird,birdAnim = [],birdSpritedata,birdSpritesheet;
let engine, world;
let pipes = [],pipe,pipedestroyer,pipedestroyerImg;
let bg,titleImg,startBtnImg,startBtn;
let gameState = "START";

function preload() {
  birdSpritedata = loadJSON("bird.json");
  birdSpritesheet = loadImage("bird.png");
  pipedestroyerImg = loadImage("pipedestroyer.png");
  bg = loadImage("bg.png");
  titleImg = loadImage("logo.png");
  startBtnImg = loadImage("start.png");
}

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
  Game.loadStuff(titleImg);

  let birdFrames = birdSpritedata.frames;

  for(let i = 0; i < birdFrames.length; i++){
    let pos = birdFrames[i].position;
    let img = birdSpritesheet.get(pos.x,pos.y,pos.w,pos.h);
    birdAnim.push(img);
  }
  console.log(birdAnim);
  bird = new Bird(50,200,50,50,birdAnim);
  pipedestroyer = new PipeKill(200,200,20,20,pipedestroyerImg,bird);
}


function draw() 
{
  background(0);
  imageMode(CENTER);
  image(bg,400,400,800,800);
  Engine.update(engine);
  if(gameState !== "START") {
    bird.show();
    bird.animate();
    createPipes();
    for (let i = 0; i < pipes.length; i++) {
     pipes[i].show();
      if(gameState === "PLAY") {
      pipes[i].update();
      pipes[i].collide(bird);
    }
  }
  pipedestroyer.update(bird);
  pipedestroyer.position();
  pipedestroyer.show();

  if(gameState === "END") {
    Game.showGameOver();
  }
  } else {
    Game.showGameTitle();
    if(Game.gameState === "PLAY") {
      gameState = "PLAY";
    }
    startBtn = createButton("");
    startBtn.position(300,500);
    startBtn.mouseClicked(startGameActual);
    startBtn.addClass("btn");
    startBtn.size(200,70);
  }
}

function keyPressed()
{
  if((keyCode === UP_ARROW || keyCode === 32) && gameState === "PLAY") {
    bird.fly();
  }

  if(keyCode === ENTER && gameState === "PLAY") {
    pipedestroyer.shoot(Bullet);
  }
}

function createPipes() {
  if(frameCount % 100 === 0 && gameState === "PLAY") {
    for(let i = 0; i < 8; i++) {
      pipe = new Pipe(800,100*i,100,100);
      pipes.push(pipe);
      
    }
  }
}

function startGameActual() {
  startBtn.hide();
  gameState = "PLAY";
  bird.y = 200;
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


                                      Notas do aluno
Obrigado, pro!
Já entendi o erro, e eu vou salvar no notepad pra não esquecer!
De novo, obrigado por isso!

Haaaapy Hacking você também!
*/