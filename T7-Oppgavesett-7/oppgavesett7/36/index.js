/*function setup(){
  createCanvas(innerWidth, innerHeight);
  background("#bd2a20");
}*/

const bredde = innerWidth;
const hoyde = innerHeight;

const ball = {
  x: 100,
  y: 150,
  r: 10,
  xfart: 6,
  yfart: 5,
  xretning: 1,
  yretning: 1,
  farge: "#2643c5"
}

function tegnBall() {
  fill(ball.farge);
  circle(ball.x, ball.y, ball.r);

  ball.x += ball.xretning * ball.xfart;
  ball.y += ball.yretning * ball.yfart;

  if(ball.x >= bredde) {
    ball.xretning = -1;
  }

  if(ball.y >= hoyde) {
    ball.yretning = -1;
  }

  if(ball.x <= 0) {
    ball.xretning = 1;
  }

  if(ball.y === 0) {
    ball.yretning = 1;
  }
}

function setup(){
  createCanvas(bredde, hoyde);
}
function draw() {
  noStroke();
  rect(0, 0, bredde, hoyde);
  background("yellow");
  tegnBall();
  

}



