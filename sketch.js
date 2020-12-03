const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine,ground;
var ball;


function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world
ground_options={
  isStatic:true
}
ground=Bodies.rectangle(200,390,200,50,ground_options);
World.add(world,ground);

ball_options={
  restitution:1


}
ball = Bodies.circle(200,100,20,ball_options)
World.add(world,ball);
}

function draw() {
  background("blue");  
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown")
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20);
}