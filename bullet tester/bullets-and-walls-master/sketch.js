var wall, thickness;
var bullet, speed, weight;

function setup(){
  createCanvas(700,700);
 speed = random(55,90);
 thickness = random(232,321);
 weight = random(30,52);
 bullet = createSprite(50,200,50,30);
 walls=createSprite(600,200,200,300);
}

function draw(){
  background(0,0,0);
  bullet.velocityX = speed;
  if(walls.x-bullet.x < (bullet.width+walls.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
       bullet.shapeColor=color("blue");
    }
    if(damage<10){
      bullet.shapeColor=color("red");
    }
  }
    drawSprites();
}