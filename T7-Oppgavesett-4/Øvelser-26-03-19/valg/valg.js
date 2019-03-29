// Den automatiske dørvakt --> gjør string til number
const inpAlder = prompt("Hvor gammel er du?");
const alder = Number(inpAlder);

if (alder > 50) {
  document.write("Du er for gammel");
}

else if (alder < 18) {
  document.write("Du er for ung");
}

else { 
  document.write("Du kommer inn!");
}

const skotype = prompt("Hva slags sko har du?");

if( (alder >= 18 && skotype === "pensko") ) {
  document.write("JUHU. Du Kommer inn");
} 

