//Oppgave 13
const tilfeldigTall = Math.round(Math.random() * 100 + 1);

if (tilfeldigTall <= 20) {
  document.write(tilfeldigTall + " is a small number");
} else if (tilfeldigTall <= 80) {
  document.write(tilfeldigTall + " is a medium big number");
} else {
  document.write(tilfeldigTall + " is a big number");
}

//Oppgave 14

/*const tall = Math.round(Math.random() * 2);

if (tall === 0) {
  document.write(tall + " is a small number");
}
else if (tall === 1) {
  document.write(tall + " is a medium big number");
}
else {
  document.write(tall + " is a big number");
}*/

const tall = Math.floor(Math.random() * 3);
switch (tall) {
  case 0:
    console.log(tall + " is a small number");
    break;
  case 1:
    console.log(tall + " is a medium number");
    break;
  case 2:
    console.log(tall + " is a big number");
}
