var sea,ship1;
var seaImg,ship1Img;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
seaImg = loadImage("sea.png");
seaImg = loadAnimation("sea.png");
ship1Img = loadImage("ship-1.png");
ship1Img = loadAnimation("ship1.png")
}

function setup(){
  createCanvas(400,600);
  // Moving background
  sea.addImage(sea.png);
  velocityX=50

  //creating ship running 
ship1Img = createSprite(70,580,20,20);
ship1.addAnimation("ShipMoving",ship1Img);
ship1Img.scale=0.08;
ship1Img.velocityx=50
}

function draw() {
  background("blue")
}





