function setup() {
  createCanvas(innerWidth, innerHeight);
}

const bredde = 500;
const hoyde = 300;
const farge = "rgba(0, 200, 255, 0.3)";
const backgroundFarge = "black";
const strokeFarge = "darkorange";
const strokeTykkelse = "5";

function draw() {


  fill(farge);
  background(backgroundFarge);
  stroke(strokeFarge);
  strokeWeight(strokeTykkelse);



  rect(10, 10, bredde, hoyde);
  rect(50, 50, bredde, hoyde);
  rect(90, 90, bredde, hoyde);
  rect(130, 130, bredde, hoyde);
  rect(170, 170, bredde, hoyde);

}