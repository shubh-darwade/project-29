
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var b,c=0,d=1;
var a=2;
function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;
  
 polygon1= new polygon(300,250,60);
 chain1 = new chain(polygon1.body,{x:300,y:250});
                  
 ground1= new Ground(750,650,400,10);
 ground2= new Ground(1000,300,300,10)

 bbox1 = new Box(750,500,50,50,"blue");
 bbox2 = new Box(700,500,50,50,"blue");
 bbox3 = new Box(800,500,50,50,"blue");
 bbox4 = new Box(850,500,50,50,"blue");
 bbox5 = new Box(650,500,50,50,"blue");
 bbox6 = new Box(900,500,50,50,"blue");
 bbox7 = new Box(600,500,50,50,"blue");
 
 pbox1 = new Box(750,450,50,50,"yellow");
 pbox2 = new Box(700,450,50,50,"yellow");
 pbox3 = new Box(800,450,50,50,"yellow");
 pbox4 = new Box(850,450,50,50,"yellow");
 pbox5 = new Box(650,450,50,50,"yellow");
 
 box1 = new Box(750,400,50,50,"pink");
 box2 = new Box(700,400,50,50,"pink");
 box3 = new Box(800,400,50,50,"pink");

 abox1 = new Box(1000,200,50,50,"yellow");
 abox2 = new Box(1050,200,50,50,"yellow");
 abox3 = new Box(950,200,50,50,"yellow");
 abox4 = new Box(1100,200,50,50,"yellow");
 abox5 = new Box(900,200,50,50,"yellow");

 cbox1 = new Box(1000,150,50,50,"blue");
 cbox2 = new Box(1050,150,50,50,"blue");
 cbox3 = new Box(950,150,50,50,"blue");
 
 dbox1 = new Box(1000,100,50,50,"pink");

 lbox1 = new Box(750,350,50,50,"green");

 Engine.run(engine);

}

function draw() {
  background("black");  
 
  drawSprites();
 

  polygon1.display();
  chain1.display();

  ground1.display();
  ground2.display();

  bbox1.display();
  bbox2.display();
  bbox3.display();
  bbox4.display();
  bbox5.display();
  bbox6.display();
  bbox7.display();

  pbox1.display();
  pbox2.display();
  pbox3.display();
  pbox4.display();
  pbox5.display();

  box1.display();
  box2.display();
  box3.display();

  abox1.display();
  abox2.display();
  abox3.display();
  abox4.display();
  abox5.display();

  cbox1.display();
  cbox2.display();
  cbox3.display();

  lbox1.display();
  dbox1.display();
  keyPressed();
 noStroke();
textSize(20);
text("Press Hold the ploygon backwards",400,100);

}

function mouseDragged() {
  Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
 d=2;
  chain1.fly();
}

function keyPressed() 
{
  if(keyDown("space"))
  {
     Body.setPosition(polygon1.body,{x:300,y:250});
     chain1.chain.bodyA=polygon1.body;  
  
        
   
  } 
  
  if(polygon1.body.position.x > 400 || polygon1.body.position.x < 100)
  {
    
  
    textSize(20);
    text("Press Space to get the polygon",400,120)
  }
}

