const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(150,300,50,50);
    box2 = new Box(250,300,50,50);
    ground = new Ground(200,height,400,20)
    pig1 = new Pig(200,300,50,50)
    log1= new Log(200,200,200,PI/2)
    box3= new Box(150,100,50,50);
    box4 = new Box(250,100,50,50);
    pig2= new Pig(200,100,50,50);
    log2=new Log(200,80,200,PI/2)
    pig5=new Pig(200,50,50,50);
    log3=new Log(180,50,110,PI/6)
    log4=new Log(230,50,110,-PI/6)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    box3.display();
    box4.display();
    pig5.display();
    log3.display();
    log4.display();
}