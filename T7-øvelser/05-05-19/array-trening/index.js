const inpTittel = document.querySelector("#inpTittel");
const info = document.querySelector("#info");

const filmer = [
  "Sharknado",
  "Sharknado 2",
  "Sharknado 3",
  "Sharknado 4",
  "The last Sharknado",
  "E.T",
  "Star Wars"
];

//Viser forslag når du starter å type i et input felt
function finnFilmer() {
  const q = inpTittel.value;
  const resultat = filmer.filter(film => film.toUpperCase().includes(q.toUpperCase()));

  info.innerHTML = "";

  for(const film of resultat) {
  
    info.innerHTML += `<h1>${film}</h1>`;
  }
}
  inpTittel.addEventListener("input", finnFilmer);

  /*if(resultat) {
    info.innerHTML = resultat;
  } else {
    info.innerHTML = "";
  }
}*/



//Viser om filmen finnes i arrayet når du skriver inn et film forslag. 
/*function finnFilm() {
  const q = inpTittel.value;
  const resultat = filmer.find(film => film.toUpperCase() === q.toUpperCase());
  if(resultat) {
    info.innerHTML = resultat;
  } else {
    info.innerHTML = "";
  }
}

inpTittel.addEventListener("input", finnFilm);*/


//q står for query
//const q = "Sharknado 4";

//Nå skal vi søke for å finne "const = q" over
//For hver film i array prøver den å finne den filmen som er det samme som "q"
//const resultat = filmer.find(film => film === q);
//console.log(resultat);



//Hvor mange filmer er det?
//console.log(filmer.length);

// Tar ut siste film
//filmer.pop();

//3 tallet definerer hvor den starter
//1 tallet bestemmer hvilken som skal bli tatt ut fra 3 tallet
//filmer.splice(3, 1);
//console.log(filmer);
