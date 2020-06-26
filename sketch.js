const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;

var gameState = onSling;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600, 300, 210, 20);
  ground2 = new Ground(400, 400, 800, 20);
  //4th row
  box1 = new Box(510, 280, 30, 30,"red"); 
  box2 = new Box(540, 280, 30, 30,"red"); 
  box3 = new Box(570, 280, 30, 30,"red"); 
  box4 = new Box(600, 280, 30, 30,"red"); 
  box5 = new Box(630, 280, 30, 30,"red"); 
  box6 = new Box(660, 280, 30, 30,"red"); 
  box7 = new Box(690, 280, 30, 30,"red"); 
  //3rd row
  box8 = new Box(540, 250, 30, 30,"black"); 
  box9 = new Box(570, 250, 30, 30,"black"); 
  box10 = new Box(600, 250, 30, 30,"black"); 
  box11 = new Box(630, 250, 30, 30,"black"); 
  box12 = new Box(660, 250, 30, 30,"black"); 
  //2nd row
  box13 = new Box(570, 220, 30, 30,"green"); 
  box14 = new Box(600, 220, 30, 30,"green"); 
  box15 = new Box(630, 220, 30, 30,"green"); 
  //1st row
  box16 = new Box(600, 190, 30, 30,"yellow"); 

  hexagon = new Hexagon(200, 120, 50, 50);
  slingShot = new Launcher(hexagon.body,{x:210, y:200});
  
}

function draw() {
  background("grey");  
  Engine.update(engine);
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  hexagon.display();
  slingShot.display();

  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  slingShot.fly();
  gameState = "launched";
}