const sekundviser = document.querySelector("#sekundviser");
const minuttviser = document.querySelector("#minuttviser");
const dato = new Date();


let sekunder = dato.getSeconds();
let minutter = dato.getMinutes();



sekundviser.style.transform = `rotate(${sekunder * 6}deg)`;
sekundviser.style.transform = `rotate(${sekunder * 6}deg)`;

function visKlokka(){
  sekunder++;
  minutter++;
  const minGrader = minutter * 0.6;
  const sekGrader = sekunder * 6;
  minuttviser.style.transform = `rotate(${minGrader}deg)`;
  sekundviser.style.transform = `rotate(${sekGrader}deg)`; 
}

setInterval(visKlokka, 1000);