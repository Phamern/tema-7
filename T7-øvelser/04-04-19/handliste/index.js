//HTML-elementer
const skjema = document.querySelector("#skjema");
const inpVare = document.querySelector("#inpVare");
const handleliste = document.querySelector("#handleliste");

//Definerer en tom handleliste

const varer = [];

function visVarer() {
  //Først tømmer vi handlelisten vår
  handleliste.innerHTML = "";

  //Så går vi gjennom arrayet med varer
  for(const vare of varer) {
    handleliste.innerHTML += `
      <article>
        <div>${vare}</div>
        <div>X</div>
      </article>
    `;
  }

}

function leggTilVare(evt) {
  evt.preventDefault();

  varer.push(inpVare.value);
  skjema.reset();

  visVarer();

  console.log(varer);
}

skjema.addEventListener("submit", leggTilVare);