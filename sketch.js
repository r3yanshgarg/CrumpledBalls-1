
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(950, 650, 50, 200);
	dustbin2 = new Dustbin(1350, 650, 50, 200);
  dustbin3 = new Dustbin(1150, 680, 375, 50);
  paper1 = new Paper(100, 625, 50, 50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();


}
function KeyPressed() {
  if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85, y:-85});

  }
}



