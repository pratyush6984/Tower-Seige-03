const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand1, stand2;
var polygon;
var slingshot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,
block11,block12,block13,block14,block15,block16, block17,block18,block19,block20,block21,block22,block23,
block24,block25;
var polygonImg;
var score = 0;
function preload(){
polygonImg = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(600,380,1200,20);
   // slingshot = new SlingShot();
    //level1
    block1 = new Block(300,275);
    block2 = new Block(330,275);
    block3 = new Block(360,275);
    block4 = new Block(390,275);
    block5 = new Block(420,275);
    block6 = new Block(450,275);
    block7 = new Block(480,275);
    //level2
    block8 = new Block(330,235);
    block9 = new Block(360,235);
    block10 = new Block(390,235);
    block11 = new Block(420,235);
    block12 = new Block(450,235);
    //level3
    block13 = new Block(360,195);
    block14 = new Block(390,195);
    block15 = new Block(420,195);
    //level4
    block16 = new Block(390,155);
    stand1 = new Ground(390,300,280,25);


    //level1
    block17 = new Block(760,170);
    block18 = new Block(790,170);
    block19 = new Block(820,170);
    block20 = new Block(850,170);
    block21 = new Block(880,170);
    //level2
    block22 = new Block(790,130);
    block23 = new Block(820,130);
    block24 = new Block(850,130);
    //level3
    block25 = new Block(820,90);
    stand2 = new Ground(820,200,200,25);
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon)
    slingshot = new SlingShot(this.polygon, {x:100,y:200})
}
function draw(){
    background("black")
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    stand1.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
   stand2.display();
   fill("yellow")
   imageMode(CENTER);
   image(polygonImg,polygon.position.x,polygon.position.y,40,40);
  slingshot.display();
  textSize(30);
  text("score :" + score,1000,40);
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}