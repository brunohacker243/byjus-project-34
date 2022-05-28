
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
  for(let i = 0; i < birdFrames.length; i++)
  {
    let pos = birdFrames[i].position;
    let img = birdSpritesheet.get(pos.x,pos.y,pos.w,pos.h);
    birdAnim.push(img);
  }

  bird = new Bird(50,200,20,20,birdAnim);
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