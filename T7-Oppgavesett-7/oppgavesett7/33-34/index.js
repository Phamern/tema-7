//Oppgave 33
const bakgrunnsFarger = ["yellow", "orange", "blue", "green", "red", "purple"];
const tilfeldigFarge = Math.floor(Math.random() * bakgrunnsFarger.length);

document.body.style.backgroundColor = bakgrunnsFarger[tilfeldigFarge];

console.log(bakgrunnsFarger);

//Oppgave 34
const frukter = ["pære", "eple", "banan", "mango", "kiwi"];

console.log(frukter);

frukter.sort();

console.log(frukter);

frukter.push("plomme");
frukter.sort();

console.log(frukter);

let frukten = frukter.indexOf("banan");

console.log(`Bananen befinner seg på plass ${frukten}`);

frukter.splice(frukter.indexOf("banan"), 1);

console.log(frukter);
