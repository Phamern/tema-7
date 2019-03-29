//cv prefix for snippet
//const id = document.querySelector("#id");

/*
// Kan skrives slikt, men infoen henger ikke sammen med hverandre
const navn = "Don Johnson";
const alder = 60;

const info = `${navn} er ${alder} gammel`;

document.write(info);*/


//Objekt - All informasjonen er samlet et sted. Bruker komma for å lage et skille mellom de ulike kategoriene. Ikke på avsluttende

const ball = {
  x: 50,
  y: 100

};

//Disse to gjør det samme. Øker ball sin x med 5
ball.x = ball.x + 5;
ball.x += 5;

const donjohnson = {
  navn: "Don Johnson",
  alder: 60
};

//Endrer verdi til et attributt i objektet
donjohnson.alder = 70;

//Legge til nye verdier
donjohnson.hårfarge = "brunt"

const info = `${donjohnson.navn} er ${donjohnson.alder} gammel og har ${donjohnson.hårfarge} hår`;

document.write(info);