const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Plinkos = [];
var Particles = [];
var Divisions = [];

var ground;

var engine, world;

function setup() {
  createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;

  for(var i = 5; i < 500; i+= 80){
    Divisions.push(new Division(i,650,10));
  }

  for(var i = 40; i <=480; i+= 50){
    Plinkos.push(new Plinko(i,75));
  }
  
  for(var i = 15; i <=470; i+= 50){
    Plinkos.push(new Plinko(i,175));
  }

  for(var i = 40; i <=480; i+= 50){
    Plinkos.push(new Plinko(i,275));
  }
  
  for(var i = 15; i <=470; i+= 50){
    Plinkos.push(new Plinko(i,375));
  }

  ground = new Ground(240,790,480,20);

}

function draw() {
  background(0);  

  Engine.update(engine);

  if(frameCount%90){
    Particles.push(new Particle(random(20,460),40));
  }

  for(var i = 0; i < Particles.length; i++){
    Particles[i].display()
  }
  for(var i = 0; i < Plinkos.length; i++){
    Plinkos[i].display()
  }
  for(var i = 0; i < Divisions.length; i++){
    Divisions[i].display()
  }


  ground.display();

  drawSprites();
}