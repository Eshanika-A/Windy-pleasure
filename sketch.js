const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boy, boyImage, ground

function preload(){
  backgroundImg=loadImage("snow2.jpg")
  boyImage = loadImage("boy.png");
}

function setup() {
  createCanvas(1500,700);
  boy = createSprite(500,590,10,10);
  boy.scale = 0.15;
  boy.addImage( boyImage);

  ground = createSprite(100,690,5000,10);

}

function draw() {
  background(backgroundImg); 

  if(keyDown("left_arrow")){
    boy.x = boy.x-5;
  }

  if(keyDown("right_arrow")){
    boy.x = boy.x+5;
  }

  fill("magenta")
  stroke("white")
  textSize(30);
  text("Use left or right arrow keys to move the boy", 100, 150);
 

  drawSprites();
}