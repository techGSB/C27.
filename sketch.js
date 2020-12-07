
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Bob1,Bob2,Bob3,Bob4,Bob5;
var roof;
var rope;

function setup() {
	createCanvas(1350, 700);


	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Bob1 = new Bob(400,500,150);
	Bob2 = new Bob(550,500,150);
	Bob3 = new Bob(700,500,150);
	Bob4 = new Bob(850,500,150);
	Bob5 = new Bob(1000,500,150);
	ground = new Ground(700,50,900,40);
	rope = new Rope(Bob1.body,roof.body,-bobDiameter*2,0);


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  ground.display();
  rope.display();
  drawSprites();
 
}



