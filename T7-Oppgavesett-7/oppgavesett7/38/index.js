//Tegner en SVG fil med HTML tags. evt.clientX og Y definerer posisjonen på SVG stjernen når man klikker.
const main = document.querySelector("main");

document.onclick = evt => {
  main.innerHTML += `
    <svg height="210" width ="500" style="left: ${evt.clientX -
      98}px; top:${evt.clientY - 105}px;">
      <polygon id="stjerne" points="100,10 40,198, 190,78 10,78 160,198"></polygon>
    </svg>
  `;
};

//TESTER MED CTX
/*const starCanvas = document.querySelector("#starCanvas");

const ctx = starCanvas.getContext("2d");*/

//function drawStar() {
/*ctx.fillStyle = "transparent";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(130, 50);
ctx.lineTo(160, 100);
ctx.lineTo(220, 110);
ctx.lineTo(170, 155);
ctx.lineTo(200, 200);
//ctx.lineTo();
//ctx.lineTo();*/

/*eksempel fra internett
ctx.lineTo(141, 70);
ctx.lineTo(218, 78.3);
ctx.lineTo(162, 131);
ctx.lineTo(175, 205);
ctx.lineTo(108, 170);
ctx.lineTo(41.2, 205);
ctx.lineTo(55, 131);
ctx.lineTo(1, 78);
ctx.lineTo(75, 68);
ctx.lineTo(108, 0);*/
/*ctx.closePath();
ctx.fill();
ctx.strokeStyle = "green";
ctx.stroke();
}*/
