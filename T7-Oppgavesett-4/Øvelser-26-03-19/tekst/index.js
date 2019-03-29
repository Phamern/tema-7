// Repitisjon

const lyd = "Fuglekvitter";
const sang = 'Alle fugler små de er';
const artikkel = `
  <article>
    <h1>Fuglesang</h1>
    <p>Dette er en fin sang</p>
  </article>
`;

//String

//const antallTegn = artikkel.length;
//console.log(antallTegn);


//const lydMedStoreBokstaver = lyd.toUpperCase();
//console.log(lydMedStoreBokstaver);

/*const hurra = "Hurra for deg";
const treGangerHurra = hurra. repeat(100);
console.log(treGangerHurra);*/

/*const teksten = "jeg gikk meg over sjø og land";
const inneholderGikkMegOver = teksten.includes("gikk meg over");
console.log(inneholderGikkMegOver);*/

const svar = prompt("Hvem er statsminister i Norge?");
const fasit = "erna solberg";

const svar_caps = svar.toUpperCase();
const fasit_caps = svar.toUpperCase();

if (svar_caps.includes(fasit_caps)) {
  console.log("RIKTIG SVAR");
}