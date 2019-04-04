
const klokka = document.querySelector("#klokka");

function visKlokka() {
  const tid= new Date();
  let timer = tid.getHours();
  let minutter = tid.getMinutes();
  let sekunder = tid.getSeconds();
 
  
  //hvordan fåå klokka til å vise feks 09:14:07
  //Nå viser den 09:14:7
  

  if(timer < 10) {
    timer = "0" + timer;
  }

  if(minutter < 10) {
    minutter = "0" + minutter;
  }

  if (sekunder < 10) { 
    sekunder = "0" + sekunder;
  }
  const tidspunkt = `${timer}:${minutter}:${sekunder}`;
  //viser tiden som en hexakode
  const csstid = `#${timer}${minutter}${sekunder}`;
  //klokka.innerHTML = tidspunkt;
  klokka.innerHTML = csstid;
  document.body.style.backgroundColor = csstid;

  //console.log(`${timer} : ${minutter} : ${sekunder}`);
}

setInterval(visKlokka, 1000);
visKlokka();