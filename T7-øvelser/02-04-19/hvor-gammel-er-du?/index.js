//Ulike måter å hente tid og dato informasjon

const dato = new Date();
//console.log(dato);

const år = dato.getFullYear();
const måned = dato.getMonth();
const ukedag = dato.getDay();
const dagIMåned = dato.getDate();



console.log("År: " + år);
console.log("Måned: " + måned);
console.log("Ukedag: " + ukedag);
console.log("Dag i måned: " + dagIMåned);

//Html-elementer 
const inpDato = document.querySelector("#inpDato");
const info = document.querySelector("#info");

function sjekkAlder() {
  const fdato = new Date(inpDato.value);
  const får = fdato.getFullYear();
  const fmåned = fdato.getMonth();
  const fukedag = fdato.getDay();
  const dagIMåned =fdato.getDate();
}

inpDato.addEventListener("change", sjekkAlder);