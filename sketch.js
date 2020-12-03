
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1, dustbin2, dustbin3;
var ground;
var control;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  control = 0;

	//Create the Bodies Here.
	paper = new Paper(50,200,60);
	dustbin1 = new Dustbin(650,590,90,10);
	dustbin2 = new Dustbin(600,555,10,60);
	dustbin3 = new Dustbin(700,555,10,60);
	
	ground = new Ground(400,600,800,12);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  keyPressed();
  
  if(control === 1){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:31,y:-31});
    control = 0;
  }
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    control = 1;
  }
}



