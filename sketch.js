const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,world

function preload() {

bgimage=loadImage("images/GamingBackground.png")
//preload the images here

}

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
	world = engine.world;

  // create sprites here
  ground = new Ground(600,height,1200,20)
  hero=new Hero(50,200,40)
  slingshot=new Slingshot(bob.body,{x:200,y:200})

  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  image(bgimage,5,5,800,600)

hero.display()
slingshot.display()
ground.display()
}

function mouseDragged(){

  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}