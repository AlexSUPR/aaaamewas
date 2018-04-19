var canvas = document.getElementById("gameCanvas"); 
    var context = canvas.getContext("2d"); 
    var screenW= canvas.width; 
    var screenH= canvas.height;
    var birdSpeedX= 3; 
    var birdSpeedY= 2; 
    var birdDirX=1;
    var birdDirY=1;
    var gravity = 9.8; 
    var birdlive=0;
    var STATE_MENU=0;
    var STATE_GAME=1;
    var STATE_GAME_OVER=2;
    var gameState= STATE_MENU; 
    var highscore=birdlive;
    var sndBackground = new Howl({
        src:['loop.wav'], 
        loop : true,
        volume:0.5
    });
    var sndFlapping = new Howl({
        src : ["wing.wav"],
        loop:false, 
        volum:0.6
    });
var bird = document.createElement("img");
 bird.src = "bird.png";
 bird.onload = function()
 {
     birdW= 75;//ball.width;s
     birdH= 75;//ball.height;
 }
 var birdW; 
 var birdH; 
 var birdPosY = screenH / 2; 
 var birdPosX = (screenW / 2) ; 
 var arena=document.createElement("img");
 arena.src= "1.png";
 var ground=document.createElement("img"); 
 ground.src="ground.png"; 
    var groundPosX= 0; 
    var groundPosY=700; 
    var pipes=document.createElement("img"); 
    pipes.src="up.png"; 
    pipes.onload= function()
    {
        pipesH= 200; 
        pipesW= 100; 
    }
    var pipesH;
    var pipesW; 
    var pipesPosX= 600;
    var pipesPosY= 500; 
    var down=document.createElement("img"); 
    down.src="down.png"; 
    down.onload= function()
    {
        downH= 300; 
        downW= 100; 
    }
    var downH;
    var downW; 
    var downPosX= 600;
    var downPosY= 0; 
    var pipes1=document.createElement("img");
    pipes1.src="down.png";
    pipes1.onload=function()
    {
        pipes1H=200;
        pipes1W=100; 
    }
    var pipes1H;
    var pipes1W; 
    var pipes1PosX= 1100;
    var pipes1PosY=downPosY;
    var up1=document.createElement("img"); 
    up1.src="up.png"; 
    up1.onload= function()
    {
        up1H= 400; 
        up1W= 100; 
    }
    var up1H;
    var up1W; 
    var up1PosX= pipes1PosX;
    var up1PosY= 400; 
    var superman=document.createElement("img");
    superman.src= "Superman.png";
    var red=document.createElement("img");
    red.src= "red.jpg";
function Update(){
    moveBird();
    PlayerInput(); 
    movePipes();
 if(birdPosX> screenW)
 {
     console.log("collision" );
     birdPosX = 0 - birdW; 
 }
    if(birdPosY < 0 )
    {
    birdPosY = 0; 
    } 
   if((groundPosY ) < birdPosY + birdH ) 
   {
       console.log("collision1" );
         gameState=STATE_GAME_OVER; } 
   if(birdPosX + birdW> (downPosX)&&
   birdPosY + birdH > downPosY&&birdPosX < downPosX+ downW&& 
   birdPosY < downPosY + downH
   ){
       console.log( "collisionup");
           gameState=STATE_GAME_OVER;
   }
 if(birdPosX + birdW> (pipesPosX)&&
   birdPosY + birdH > pipesPosY&&birdPosX < pipesPosX+ pipesW&& 
   birdPosY < pipesPosY + pipesH
   ){
       console.log( "collisiondown");
            gameState=STATE_GAME_OVER;
   }
   if( downPosX+downW < 0){
       console.log("left wall"); 
       downPosX=825;

   }   
   if((pipesPosX + pipesW)<0){
       console.log("pipes with left wall")
       pipesPosX=825; 
   }
   if( pipes1PosX+pipes1W < 0){
       console.log("pipe1"); 
    
   }
    if(birdPosX + birdW> (downPosX)&&
   birdPosY + birdH > downPosY&&birdPosX < downPosX+ downW&& 
   birdPosY < downPosY + downH
   ){
       console.log( "collisionup");
           gameState=STATE_GAME_OVER;
   } if(birdPosX + birdW> (pipes1PosX)&&
   birdPosY + birdH > pipes1PosY&&birdPosX < pipes1PosX+ pipes1W&& 
   birdPosY < pipes1PosY + pipes1H
   ){
       console.log( "pipes1hah");
           gameState=STATE_GAME_OVER;;
   }
   if((pipes1PosX + pipes1W)<0){
       console.log("pipes with left wall")
       pipes1PosX=900 * 2; 
   }
   if(birdPosX + birdW> (up1PosX)&&
   birdPosY + birdH > up1PosY&&birdPosX < up1PosX+ up1W&& 
   birdPosY < up1PosY + up1H
   ){
       console.log( "up2hah");
        
        gameState=STATE_GAME_OVER;
   }
   if((up1PosX + pipes1W)<0){
       console.log("up with left wall")
       up1PosX=900 * 2; 
   }
   if(downPosX<birdPosX&&downPosX==399 ){
       highscore += birdlive+1;
   }
   if(pipes1PosX<birdPosX && pipes1PosX==399){
       highscore+=birdlive+1;
   }
    };
function ResetGame(){
     birdPosY = (screenH /2); 
    birdPosX = (screenW / 2); ; 
    birdlive=0;
    birdDirY=1;
    birdSpeedX =2;
    birdSpeedY=2;
    birdlive=0; }; 
function ResetPipes(){
    downPosX= 600;
    downPosY= 0; 
    pipesPosX= 600;
    pipesPosY= 500;
    pipes1PosY= 0;
    pipes1PosX=1100;
    up1PosX=pipes1PosX;};

function moveBird(){
    birdPosY+=birdSpeedY + 0.1 - 0.01;};
function movePipes(){
    downPosX -= 1; 
    pipesPosX-=1;
    pipes1PosX-=1;

    up1PosX-=1;};
function PlayerInput (){
  canvas.width=canvas.width; 
  if (keyboard.isKeyDown(keyboard.KEY_SPACE)){
      birdPosY -= 15; 
    sndFlapping.play();
    }};
function Draw(){ 
      
        canvas.width=canvas.width; 
        context.drawImage(arena, 0,0, screenW, screenH);
      context.drawImage( pipes1, pipes1PosX, pipes1PosY, pipes1W, pipes1H); 
        context.drawImage(up1, up1PosX, up1PosY, up1W, up1H);
     context.drawImage(down, downPosX, downPosY, downW, downH );
     context.drawImage(pipes, pipesPosX, pipesPosY, pipesW, pipesH);
    context.drawImage(bird, birdPosX, birdPosY, birdW, birdH); 
    context.drawImage(ground, groundPosX, groundPosY, screenW, 100);
    context.font="35px Arial"; 
    context.fillStyle = "#800000";
    context.fillText("YOUR SCORE: "+ highscore, 10,30);};
function DrawMenu(){
    context.drawImage(red,0,0,screenW,screenH);
    context.drawImage(superman, 0,0,screenW,screenH);
    context.font="35px Arial"; 
    context.fillStyle = "#ffff00";
    context.fillText("Press space for start",25, screenH/2 + 80 );}
function UpdateMenu(){if(keyboard.isKeyDown(keyboard.KEY_SPACE)){
        gameState=STATE_GAME;
        sndBackground.play();
    }
 };
function UpdateGameOver(){
    ResetGame();
    ResetPipes();
    if(keyboard.isKeyDown(keyboard.KEY_SPACE)){
        gameState=STATE_GAME;
        highscore=0;
    }};
function drawGameOver(){
    context.fillStyle = "#ff6600";
    context.fillText("YOUR SCORE: "+ highscore, 100,300);
   context.fillText("PRESS SPACE BAR TO RESET", 100,500)
 };

function Loop(){switch(gameState){
        case STATE_MENU:
        UpdateMenu();
        DrawMenu(); 
        break;
        case STATE_GAME:
        Update();
        Draw();
        break; 
        case STATE_GAME_OVER:
        UpdateGameOver();
        drawGameOver();
        break;
    }
    requestAnimationFrame(Loop);}
Loop();