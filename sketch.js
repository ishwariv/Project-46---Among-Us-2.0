var table, player, redEye, crew1,crew2,crew3,crew4,crew5,crew6;
var tableImg,playerImg,redEyeImg,crew1Img,crew2Img,crew3Img;
var crew4Img,crew5Img,crew6Img;
var logo;
var energy;
var wiring, wiringImg;
var cardSwipe, cardSwipeImg;
var garbage, garbageImg;
var fuel, fuelImg;
var gameState=0;

function preload(){
  tableImg=loadImage("images/table.png");
  playerImg=loadImage("images/purple.png");
  redEyeImg=loadImage("images/red.png");
  crew1Img=loadImage("images/orange.png");
  crew2Img=loadImage("images/blue.png");
  crew3Img=loadImage("images/yellow.png");
  crew4Img=loadImage("images/cyan.png");
  crew5Img=loadImage("images/brown.png");
  crew6Img=loadImage("images/black.png");
  wiringImg=loadImage("images/Wiring.png");
  cardSwipeImg=loadImage("images/card-swipe.jpg");
  garbageImg=loadImage("images/garbage.png");
  fuelImg=loadImage("images/fuel.png");
}
function setup() {
  //canvas
 createCanvas(1350,600);

 //table
 table=createSprite(675,320,100,100);
 table.addImage(tableImg);
 table.scale=1.15;
 table.setCollider("circle",-3,2.5,60);

 //Player (Purple)
 player=createSprite(555,300,10,10);
 player.addImage(playerImg);
 player.scale=0.03;
 player.setCollider("rectangle",0,0,85,223);

 //RedEye (Impostor)
 redEye=createSprite(795,300,10,10);
 redEye.addImage(redEyeImg);
 redEye.scale=0.3;
 redEye.setCollider("rectangle",0,0,redEye.width,redEye.height);

 //Crew1(Orange)
 crew1=createSprite(675,200,10,10);
 crew1.addImage(crew1Img);
 crew1.scale=0.4; 
 crew1.setCollider("rectangle",0,0,85,223);

 //Crew2 (Blue)
 crew2=createSprite(675,430,10,10);
 crew2.addImage(crew2Img);
 crew2.scale=0.35;
 crew2.setCollider("rectangle",0,0,85,223);

 //Crew3 (Yellow)
 crew3=createSprite(595,400,10,10);
 crew3.addImage(crew3Img);
 crew3.scale=0.35;
 crew3.setCollider("rectangle",0,0,85,223);

 //Crew4 (Cyan)
 crew4=createSprite(595,230,10,10);
 crew4.addImage(crew4Img);
 crew4.scale=0.35;
 crew4.setCollider("rectangle",0,0,85,223);

 //Crew5 (Brown)
 crew5=createSprite(750,400,10,10);
 crew5.addImage(crew5Img);
 crew5.scale=0.35;
 crew5.setCollider("rectangle",0,0,85,223);

 //Crew6 (Black)
 crew6=createSprite(750,230,10,10);
 crew6.addImage(crew6Img);
 crew6.scale=0.35;
 crew6.setCollider("rectangle",0,0,85,223);

 //Wiring
 wiring=createSprite(100,95,80,80);
 wiring.addImage(wiringImg);
 wiring.scale=0.2;

 //Card Swipe
 cardSwipe=createSprite(1200,95,70,80);
 cardSwipe.addImage(cardSwipeImg);
 cardSwipe.scale=0.145; 

 //Garbage
 garbage=createSprite(90,505,80,80);
 garbage.addImage(garbageImg);
 garbage.scale=0.2;

 //Fueling
 fuel=createSprite(1320,505,80,80);
 fuel.addImage(fuelImg);
 fuel.scale=0.4;
}

function draw() {
  background(0);  

  if(gameState===0){
  if(keyDown(UP_ARROW)&&player.y>0){
    player.y=player.y-10
  }
  if(keyDown(DOWN_ARROW)&&player.y<600){
    player.y=player.y+10
  }
    if(keyDown(RIGHT_ARROW)&&player.x<1350){
    player.x=player.x+10
  }
    if(keyDown(LEFT_ARROW)&&player.x>0){
    player.x=player.x-10
  }

  if(player.collide(redEye)){
    gameState=1;
  }
  }
  wiring.depth=player.depth;
  player.depth=player.depth+1;
  
  player.collide(table);
  drawSprites();
}