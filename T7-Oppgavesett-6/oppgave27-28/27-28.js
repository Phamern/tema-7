function setup() {
  createCanvas(innerWidth, innerHeight);
}

const ballOne = {
  x: Math.random() * innerWidth,
  y: Math.random() * innerHeight,
  r: 10,
  yretning: 1,
  xretning: 1,
  xfart: 10,
  yfart: 10,
  farge: "rgba(136, 61, 165, 0.3)"
};

const ballTwo = {
  x: Math.random() * innerWidth,
  y: Math.random() * innerHeight,
  r: 10,
  yretning: 1,
  xretning: 1,
  xfart: 10,
  yfart: 10,
  farge: "rgba(165, 61, 91, 0.3)"
};

function tegnBallOne() {
  fill(ballOne.farge);
  circle(ballOne.x, ballOne.y, ballOne.r);

  ballOne.x +=
    (ballOne.xfart + Math.random()) * (ballOne.xretning + Math.random());
  ballOne.y +=
    (ballOne.yfart + Math.random()) * (ballOne.yretning + Math.random());

  if (ballOne.x >= innerWidth - ballOne.r) {
    ballOne.xretning = -1;
  }

  if (ballOne.y >= innerHeight - ballOne.r) {
    ballOne.yretning = -1;
  }
  if (ballOne.x <= 0 + ballOne.r) {
    ballOne.xretning = 1;
  }
  if (ballOne.y <= 0 + ballOne.r) {
    ballOne.yretning = 1;
  }
}

ballOne.r = 20;

function tegnBallTwo() {
  fill(ballTwo.farge);
  circle(ballTwo.x, ballTwo.y, ballTwo.r);

  ballTwo.x += ballTwo.xfart * ballTwo.xretning;
  ballTwo.y += ballTwo.yfart * ballTwo.yretning;

  if (ballTwo.x >= innerWidth - ballTwo.r) {
    ballTwo.xretning = Math.random() - 1;
  }

  if (ballTwo.y >= innerHeight - ballTwo.r) {
    ballTwo.yretning = Math.random() - 1;
  }
  if (ballTwo.x <= 0 + ballTwo.r) {
    ballTwo.xretning = Math.random() + 1;
  }
  if (ballTwo.y <= 0 + ballTwo.r) {
    ballTwo.yretning = Math.random() + 1;
  }
}

function draw() {
  noStroke();
  tegnBallOne();
  tegnBallTwo();
}
