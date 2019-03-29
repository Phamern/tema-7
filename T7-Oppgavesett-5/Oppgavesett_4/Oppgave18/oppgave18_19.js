//Oppgave 18 og 19

function setup() {
  createCanvas(300, 300);
}

function draw() {

  //Smiley-hodet
  strokeWeight(10);
  stroke("darkorange");
  fill("orange");
  ellipse(150, 150, 200);

  //Smiley-høyreøyet
  noStroke();
  fill("red");
  ellipse(190, 120, 30);

  //Smiley-venstreøyet
  //Blunker når man klikker
  if(mouseIsPressed) {
  stroke("red");
  strokeWeight(12)
  line(100, 120, 130, 120);
}
  else {
    noStroke();
    fill("red");
    ellipse(110, 120, 30);
}
  


  //Smiley-munn
  stroke("red");
  strokeWeight(12);
  noFill();
  arc(150, 160, 130, 100, 0, PI, OPEN); 

}