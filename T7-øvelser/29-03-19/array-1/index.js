/*
const bloggere = ["Sophie Elise", "Annijor", "Pappahjerte"]; 

const antallBloggere = bloggere.length;

document.write(antallBloggere);
document.write("<br>"); 

//Det dukker opp en ny influencer på scenen
//Push er den mest vanlige. Men det finnes flere måter. 

bloggere.push("Pilotfrue");

bloggere.unshift("Jon Arne Riise");

document.write(bloggere[0]);*/

//Navnet på et array er const, men innholdet kan endres

//Registrere karakterer

const karakterer = [4, 5, 7, 8, 9, 10, 30, 50, 3, 32, 16, 37];

//Man kan ta ut en karakter. pop() tar ut den siste krakteren
karakterer.pop();

//Ta ut den første:
karakterer.shift();

//Ta ut krakteren på plass 4/index 3
//Ta ut ett element fra plass 4/index 3
karakterer.splice(3, 1);

//Hadde arrayen vært tom [] kunne man bruke push til å legge til
//karakter.push(8)

//Finn summen av karakterene
let sum = 0;

for(const karakter of karakterer) {
  document.write("Karakteren ble " + karakter);
  document.write("<br>");

  //Legger til karakteren i sum
  sum += karakter;

  //Hva er snittet?
  const snitt = sum / karakterer.length;

  console.log(snitt);

}
