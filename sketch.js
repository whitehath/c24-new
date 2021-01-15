const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var rubber;
var plane ;
var sand0,sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;
var iron;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane=new Plane(600,height,1200,20);
    hammer=new Hammer(100,100);
	rubber=new Rubber(150,20,50);
	stone=new Stone(700,320,70,70);
	sand0= new Sand (100,10,50);
	sand1= new Sand(101,11,10,50);
	sand2= new Sand(102,12,10,50);
	sand3= new Sand(103,13,10,50);
	sand4= new Sand(104,14,10,50);
	sand5= new Sand(105,15,10,50);
	sand6= new Sand(106,16,10,50);
	sand7= new Sand(107,17,10,50);
	sand8= new Sand(108,18,10,50);
	sand9= new Sand(109,19,10,50);
	sand10= new Sand(200,20,10,50);

	iron=new Iron (100,200,35,35);
	
	Engine.run(engine);
}


function draw() {
  background("skyBlue");
  Engine.update(engine);
  
  plane.display();
  hammer.display();
  rubber.display();
  stone.display();
  iron.display();
  sand0.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
 
}