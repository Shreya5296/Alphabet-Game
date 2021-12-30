var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ground;
var groundImg;
var rand;
var balloonGroup, balloon1, balloon2, balloon3, balloon4, balloon5, balloon6, balloon7, balloon8;
var balloon9, balloon10, balloon11, balloon12, balloon13, balloon14, balloon15, balloon16;
var balloon17, balloon18, balloon19, balloon20, balloon21, balloon22, balloon23, balloon24;
var balloon25, balloon26;
var balloonImg;
var balloonLabel = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78 ,79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
var balloonLabel1, balloonLabel2, balloonLabel3;
var balloon;
var song;
var score = 0;

function preload(){
  groundImg = loadImage("./assets/ground.png");
  balloon1 = loadImage("./assets/a.png");
  balloon2 = loadImage("./assets/b.png");
  balloon3 = loadImage("./assets/c.png");
  balloon4 = loadImage("./assets/d.png");
  balloon5 = loadImage("./assets/e.png");
  balloon6 = loadImage("./assets/f.png");
  balloon7 = loadImage("./assets/g.png");
  balloon8 = loadImage("./assets/h.png");
  balloon9 = loadImage("./assets/i.png");
  balloon10 = loadImage("./assets/j.png");
  balloon11 = loadImage("./assets/k.png");
  balloon12 = loadImage("./assets/l.png");
  balloon13 = loadImage("./assets/m.png");
  balloon14 = loadImage("./assets/n.png");
  balloon15 = loadImage("./assets/o.png");
  balloon16 = loadImage("./assets/p.png");
  balloon17 = loadImage("./assets/q.png");
  balloon18 = loadImage("./assets/r.png");
  balloon19 = loadImage("./assets/s.png");
  balloon20 = loadImage("./assets/t.png");
  balloon21 = loadImage("./assets/u.png");
  balloon22 = loadImage("./assets/v.png");
  balloon23 = loadImage("./assets/w.png");
  balloon24 = loadImage("./assets/x.png");
  balloon25 = loadImage("./assets/y.png");
  balloon26 = loadImage("./assets/z.png");
  balloonImg = [balloon1, balloon2, balloon3, balloon4, balloon5, balloon6, balloon7, balloon8,
         balloon9, balloon10, balloon11, balloon12, balloon13, balloon14, balloon15, balloon16,
         balloon17, balloon18, balloon19, balloon20, balloon21, balloon22, balloon23, balloon24,
         balloon25, balloon26]
  song = loadSound('score.mp3');
}

function setup() {
  createCanvas(1000,450);
  ground = createSprite(400, 375, 800, 50);
  ground.addImage("ground", groundImg);
  ground.scale = 0.25;

  balloonGroup = createGroup();
}

function draw() {
  background(0,196,255);
 // console.log(balloonLabel);
  if (gameState===PLAY){
    spawnBalloons();
    strokeWeight(2);
    stroke("red");
    fill("white");
    textFont("Georgia");
    textSize(20)
    text("SCORE: " +score, width-150,20 );

    
  }
    else if (gameState === END){
      strokeWeight(2);
      stroke("red");
      fill("white");
      textFont("Georgia");
      textSize(60)
      text("Game Over ", 310,200 );
    //  score = 0;
     // gameState = PLAY;
    }
  drawSprites();
  text("Press the alphabet appearing on the balloons",width/2-170,height-20);
 // noLoop();
}

// Function spawn balloon 
function spawnBalloons() {
  if(frameCount % 100 == 0) {
    balloon = createSprite(random(40,760),350,30,40);
    
    //balloon.debug = true;
    balloon.velocityY = -6;

    rand = Math.round(random(0,25));
    
    balloonLabel1 = balloonLabel[rand];
    balloon.addImage(""+balloonLabel1, balloonImg[rand]);

    balloonLabel2 = balloon.getAnimationLabel();
    balloonLabel3 = String.fromCharCode(balloonLabel2);
    console.log(balloonLabel2+"-"+balloonLabel3);

   balloon.scale = 0.9;
    balloon.lifetime = 300;

    //add each balloon to the group
    balloonGroup.add(balloon);
  }
}

function keyPressed(){
  console.log(keyCode); 
  console.log(balloonLabel2); 
        if(keyCode == balloonLabel2 && gameState === PLAY){ 
          balloonLabel2 = null;
        console.log("m here");
        balloon.destroy();
       song.play();
        //song.pause();
        score = score+1;
        console.log(score);
        if (score>=10){
          gameState = END;
        }
        } 
}
