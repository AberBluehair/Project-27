
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    bobObject1 = new Bob(200,100,70,70);
	bobObject2 = new Bob(340,100,70,70);
	bobObject3 = new Bob(480,100,70,70);
	bobObject4 = new Bob(620,100,70,70);
	bobObject5 = new Bob(760,100,70,70);
	roof1 = new Roof(200,635,15,420);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



