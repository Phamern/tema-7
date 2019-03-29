
const main = document.querySelector("main");

antall = 1;

while(antall <= 100) {

  const farge = `hsl(${Math.random() * 360}, 100%, 50%)`

  main.innerHTML += `
  
  <div style="
    animation-delay: ${Math.random()*2000}ms;
    background-color: ${farge}">

    ${antall}

  </div>
  `
  antall++;
} 