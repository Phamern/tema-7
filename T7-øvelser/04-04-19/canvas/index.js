const mittCanvas = document.querySelector("#mittCanvas");

//ctx er tegne funksjon i javascript
const ctx = mittCanvas.getContext("2d");

let x = 10;
let y = 10;

function draw() {

  //setter farge
  ctx.fillStyle = "red";

  //tegner et rektangel
  ctx.fillRect(x, y, 100, 50);

  //Legger til på x og y koordinatene og tegner på ny
  x++;
  y++;

  //Stopper draw funksjonen hvis x blir større enn 100
  if(x < 100) {
    requestAnimationFrame(draw);
  }

  //starter funksjonen på nytt med en pause i mellom. Men looper uendelig
  //requestAnimationFrame(draw);
}

//Setter hastigheten på draw funksjonen
//setInterval(draw, 100);

draw();