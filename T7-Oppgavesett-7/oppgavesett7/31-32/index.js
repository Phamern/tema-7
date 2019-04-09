/*function setup() {
  createCanvas(innerWidth, innerHeight);
  background("#051630");
  //noLoop();
}


//for(x <= innerWidth)

let x = 0;
let y = 0;
let i = 0;

const antall = 100;
const avstand = 60;

/*
//let antall = 1000;
let antallXSirkel = 1.6;
let antallYSirkel = 1.6;
let antall = 1000;
let nr = 0;*/

/*const sirkel = {
  farge: "#122a51",
  x: 40,
  y: 40,
  r: 20

}




function draw() {*/

/*while (nr <= antall) {
    noStroke();
    fill(sirkel.farge);
    circle(sirkel.x * 60, sirkel.y, sirkel.r);
    sirkel.x += antall;
    nr++;
    if (sirkel.x > 10) {
      sirkel.y += 60;
      sirkel.x = 0;
    }

    console.log(antallXSirkel);

  }

  /*if(antallXSirkel > innerWidth && antallYSirkel <= innerHeight) {
    noStroke();
    
    fill(sirkel.farge);
    circle(sirkel.x, sirkel.y, sirkel.r);
    sirkel.y = 60 * antallYSirkel;
    antallYSirkel++;
    console.log(antallYSirkel);
  }

  // rect(0, 0, innerWidth, innerHeight);




  while (i < antall) {

    circle(x * avstand, y * avstand, 20);
    x++;
    i++;
    console.log(x);

    if (x % 10 === 0) {
      x = 0;
      y++;
    }
    console.log(y);
  }

}*/

/*function setup() {
  createCanvas(innerWidth, innerHeight);
  background("orange");
}

let x = 0.7;
let y = 0.5;
let i = 0;

const avstand = 30;

function draw() {

  noStroke();

  while(i <= innerWidth) {

    circle(x * avstand, y * avstand, 10);
    x++;
    i++;
    console.log(x);
    
    if(i >= innerWidth) {
      x = 0
      y++;
      i++;
      console.log(y);
    }
  }*/

function setup() {
  createCanvas(innerWidth, innerHeight);
  background("black");
  noLoop();
}

let antall = 0;

const sirkel = {
  x: 40,
  y: 40,
  r: 15
};

function draw() {
  while (antall <= innerWidth) {
    noStroke();
    circle(sirkel.x, sirkel.y, sirkel.r);

    sirkel.x += 50;

    if (sirkel.x >= innerWidth) {
      sirkel.x = 40;
      sirkel.y += 40;
      fill(255 - sirkel.y / 3);
      antall++;
    }
  }
}
