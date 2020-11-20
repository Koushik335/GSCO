var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(800,400);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  car=createSprite(50,200,50,50);
  wall=createSprite(700,200,10,height/2);
  wall.shapeColor="blue";
}

function draw() {
  background("black");
  car.velocityX=speed;  
  deformation=(0.5*weight*speed*speed)/22500;
  if(car.isTouching(wall)&&deformation<100){
    car.velocityX=0;
    car.shapeColor=color(0,255,0);
  }
  if(car.isTouching(wall)&&deformation<180&&deformation>100){
    car.velocityX=0;
    car.shapeColor=color(230,230,0);
  }
  if(car.isTouching(wall)&&deformation>180){
    car.velocityX=0;
    car.shapeColor=color(255,0,0);
  }
  drawSprites();
}