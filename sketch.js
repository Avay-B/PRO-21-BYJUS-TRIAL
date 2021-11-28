
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);


	engine = Engine.create();
	world = engine.world;
	angleMode(DEGREES);

	

	//Create the Bodies Here.
var paper_ball;
var ball_options ={
	
	isStatic:true,
	restitution:0.3,
	friction:0,
	density:1.2

}


groundObj = new Object(width/2670,width, 20);
leftSide = new Object(1100, 600, 20, 120);
rightSide = new Object(1300, 600, 20, 120);

}

	
  



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  groundObj.display()

 
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(paper_ball, position, force);
	}
}

