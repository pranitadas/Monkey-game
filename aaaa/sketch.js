
var monkey , monkey_running, ground, invisibleground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
monkey=createSprite(50,329,30,30);
  monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;

  ground=createSprite(200,365,1000,5);
ground.velocityX=-3;

invisibleground=createSprite(200,370,1000,5);
invisibleground.visible=false;


}


function draw() {
background("white");
  drawSprites();

if(ground.x>=50){
  ground.x=500;
}

  if(keyDown("space")){
     monkey.y=monkey.y-50;
     
  
  }
monkey.y=monkey.y+5;

monkey.collide(invisibleground);

  text("Survival Time="+score,200,50);
spawnbanana();
spawnObstacles();
fill("black");
  textSize(20);
score=score+Math.round(frameRate()/60);

}


function spawnbanana(){
  if(frameCount%60===0){
    banana=createSprite(400,180,20,20);
  banana.addImage(bananaImage);
  banana.velocityX=-5;
 banana.scale=0.1;
  banana.lifetime=100;
  }
}
  function spawnObstacles(){
    if(frameCount%80===0){
      obstacle=createSprite(400,370,20,20);
    obstacle.velocity.x=-5;
   obstacle.collide(invisibleground);
   obstacle.addImage(obstacleImage)
    obstacle.scale=0.23;
    }
  }
  
  




