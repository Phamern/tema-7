
//Kan definere variabler med høyde og bredde
const bredde = innerWidth;
const hoyde = innerHeight;
let scoreH = 0;
let scoreV = 0;
const textScoreH = document.querySelector("#scoreH");
const textScoreV = document.querySelector("#scoreV");


const playerOne = {
  x: 100,
  y: hoyde / 2 - 50,
  h: 100,
  b: 10,
  fart: 10,
  yretning: 0,
  farge: "white"
} 
const playerTwo = {
  x: bredde - 100,
  y: hoyde / 2 - 50,
  h: 100,
  b: 10,
  fart: 10,
  yretning: 0,
  farge: "white"
} 

const ball = {
  x: 70,
  y: 120,
  r: 10,
  xfart: 6,
  yfart: 5,
  xretning: 1,
  yretning: 1,
  farge: "white"
}

function hitOne() {

  const erBallenOver = ball.y + ball.r < playerOne.y;
  const erBallenUnder = ball.y > playerOne.y + playerOne.h + ball.r;
  const erBallenHoyre = ball.x > playerOne.x + playerOne.b + ball.r;
  const erBallenVenstre = ball.x < playerOne.x - ball.r;

if (!erBallenOver && !erBallenUnder && !erBallenHoyre && !erBallenVenstre) {
    ball.xretning = 1;
    ball.xfart++;
  }
}



function hitTwo() {

  const erBallenOver = ball.y + ball.r < playerTwo.y;
  const erBallenUnder = ball.y > playerTwo.y + playerTwo.h + ball.r;
  const erBallenHoyre = ball.x > playerTwo.x + playerTwo.b + ball.r;
  const erBallenVenstre = ball.x < playerTwo.x - ball.r;

if (!erBallenOver && !erBallenUnder && !erBallenHoyre && !erBallenVenstre) {
    ball.xretning = -1;
    ball.xfart++;
  }
}




function tegnPlayerOne() {

  

  fill(playerOne.farge);
  rect(playerOne.x, playerOne.y, playerOne.b, playerOne.h);
  

    /*if((playerOne.y <= 0 && playerOne.yretning === -1) || (playerOne.y >= hoyde && playerOne.yretning === 1)) {
    return;
  }*/



  if(playerOne.y <= 0){
    playerOne.y =  0;
  }
  
  if(playerOne.y >= hoyde - playerOne.h) {
    playerOne.y = hoyde - playerOne.h;
  }
  
  playerOne.y += playerOne.fart * playerOne.yretning;

  

  if (keyIsDown(87))
  {
    playerOne.yretning = -1; 
  }
  if (keyIsDown(83)) {
    playerOne.yretning = 1;
}
}



function tegnPlayerTwo(){
  fill(playerTwo.farge);
  rect(playerTwo.x, playerTwo.y, playerTwo.b, playerTwo.h);

  if(playerTwo.y <= 0){
    playerTwo.y =  0;
  }
  
  if(playerTwo.y >= hoyde - playerTwo.h) {
    playerTwo.y = hoyde - playerTwo.h;
  }

  playerTwo.y += playerTwo.fart * playerTwo.yretning;

  if (keyIsDown(UP_ARROW))
  {
    playerTwo.yretning = -1; 
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerTwo.yretning = 1;
  }
  
}

function keyReleased(){
  if (keyCode === 38 || keyCode === 40){
  playerTwo.yretning = 0;
}

if(keyCode === 83 || keyCode === 87){
  playerOne.yretning = 0;
}

}


function tegnBall() {

  fill(ball.farge);
  circle(ball.x, ball.y, ball.r);

   ball.x += ball.xfart * ball.xretning;
   ball.y += ball.yfart * ball.yretning;

    //if (ball.x >= bredde) {
      // ball.xretning = -1;
    //}

    if (ball.y >= hoyde) {
      ball.yretning = -1;
    }

    if (ball.y === 0) {
      ball.yretning = 1;
    }

    //if (ball.x <= 0) {
      //ball.xretning = 1;
    //}



  //Hvordan kan dere få ballen til å snu når den treffer veggen til høyre

}

function scoreBoard() {

  if (ball.x <= 0) {
      scoreV++;
      textScoreV.innerHTML = scoreV;
      nyBall();
  }



  if (ball.x >= bredde) {
      scoreH++;
      textScoreH.innerHTML = scoreH;
      nyBall();
  }
}

function nyBall(){
  ball.x = bredde / 2;
  ball.xretning = 0;
  ball.yretning = 0;
  ball.xfart = 6;
  ball.yfart = 5;;
}

function startBall() {
  let xdir = 1;
  if(Math.random() > 0.5) {
    xdir = -1;
  }

  let ydir = 1;
  if(Math.random() > 0.5) {
    ydir = -1;
  }
  ball.xretning = xdir;
  ball.yretning = ydir;
}

document.addEventListener("click", startBall);


function setup() {
  createCanvas(bredde, hoyde);
}

//Dette er en loop
function draw() {
  noStroke();
  rect(0, 0, bredde, hoyde)
  background("orange");

  tegnBall();
  tegnPlayerOne();
  tegnPlayerTwo();
  hitOne();
  hitTwo();
  scoreBoard();

}
