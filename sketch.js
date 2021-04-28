const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];

function setup(){
 createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground(100,795,1800,20);

 for (var k = 0; k <= width; k = k+80){
   divisions.push(new Division(k, 685, 10, 200));
  }

 for (var j = 40; j <= width; j = j+50){
   plinkos.push(new Plinko(j, 75));
  }

 for (var j = 15; j <= width-10; j = j+50){
   plinkos.push(new Plinko(j, 175));
  }

 for (var j = 40; j <= width; j = j+50){
   plinkos.push(new Plinko(j, 275));
  }

 for (var j = 15; j <= width-10; j = j+50){
   plinkos.push(new Plinko(j, 375));
  }
}

function draw(){
  background("black"); 
  Engine.update(engine);

  ground.display();

 for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  if (frameCount % 60 === 0){
    particles.push(new Particles(random(width/2-10, width/2+10), 10, 10));
   }

 for (var t = 0; t < divisions.length; t++){
    divisions[t].display();
  }

 for (var p = 0; p < particles.length; p++){
    particles[p].display();
  }
}