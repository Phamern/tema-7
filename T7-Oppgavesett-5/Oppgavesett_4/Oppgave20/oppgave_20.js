const inpFarge = document.querySelector("#inpFarge");


function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  noStroke();

  if (mouseIsPressed) {
    fill(inpFarge.value);
  } else {
    noFill();
  }
  ellipse(mouseX, mouseY, 20, 20);
}

/*void setup(){
  size(800, 800);
  background(#eeeeee);
  //noLoop();
}

void draw(){
  background(#eeeeee):
  translate(width/2,height/2);
  for(int a=0; a<360; a+=2){
    pushMatrix();
    rotate(radians(a));
    line(100, 0, 350, 0);
    popMatrix();
  }
}

void keyPressed() {
  redraw();
}*/