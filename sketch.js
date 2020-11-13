
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
monkey = createSprite(80,315,20,20)
  monkey.addAnimation("monkey",(monkey_running))
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup=new Group();
  obstaclesGroup= new Group();
  
}


function draw() {
  background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2;
    
  }
  if(keyDown("space")){
    
    monkey.velocityY=-12;
    
  }
  
  
  monkey.velocityY=monkey.velocityY +0.8;
  
  monkey.collide(ground);
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivalTime,100,50);
  
  
  spwanFood();
  spwanObstacle();
  
drawSprites();
} 
function spwanFood(){
  if(frameCount%60===0){
    banana=createSprite(200,Math.round (random (120,200)),20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    bananaGroup.add(banana);
    banana.lifetime=300;
    
  }
}
 
function spwanObstacle(){
  
    
    if(frameCount%240===0){ 
      obstacle=createSprite(300,360) 
      obstacle.addImage(obstacleImage); 
      obstacle.scale=0.2;
      obstacle.velocityX=-4;
      obstaclesGroup.add (obstacle); 
      obstacle.lifetime=300; 
  }
  
}





