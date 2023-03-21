const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var w1,w2,w3,w4;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  w1 =new Ground(200,390,400,20);
  w2 = new Ground(390,200,20,400);
  w3 = new Ground(10,200,20,400);
  w4 = new Ground(200,10,400,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  w1.show();
  w2.show();
  w3.show();
  w4.show();
  Engine.update(engine);
}

