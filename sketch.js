const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var boxes=[];
var bg;

function Preload() {
bg = loadImage("BG.png")
}

function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world
  G = new Ground(600,600,1200,20)
  for(i=0;i<8;i++) {
    boxes.push(new Box (700,100))
    if (i<6){
      boxes.push(new Box (800,100))
      boxes.push(new Box (900,100))
  }
}
hero = new Hero(200,200,250)
rope = new Rope (hero.body, {x:500, y:50})
monster = new Monster (1000,550,300)
}
function draw() {
  background(255)  
 Engine.update(engine);
 G.display();
 for (i=0;i<boxes.length;i++){
   boxes[i].display();
 }
hero.display();
 rope.display();
 monster.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
}
