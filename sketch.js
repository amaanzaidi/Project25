const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var page;
var ground;
var line1,line2,line3;

function preload()
{
	
}

function setup() {
	createCanvas(4000, 700);


	engine = Engine.create();
	world = engine.world;


	
   page = new Page(100,595,70);
   ground = new Ground(2000,600,4000,10);
   line1 = new bucket(1000,590,150,10);
   line2 = new bucket(920,490,10,200);
   line3 = new bucket(1080,490,10,200);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  page.display();
  line1.display();
  line2.display();
  line3.display();
  ground.display();
  drawSprites();
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(page.body,page.body.position,{x:140,y:-100});

  
  }
}