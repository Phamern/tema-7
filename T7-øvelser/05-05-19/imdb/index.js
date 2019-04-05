const main = document.querySelector("main");
const knapper = document.querySelectorAll("#knapper div");

function visFilmer(evt) {
  //Finner ut hvilken knapp som ble klikket på
  const knapp = evt.target;
  //Fanger på sjangeren som er satt på knappen. Dataset er knyttet til HTML dokumentet. 
  const genre = knapp.dataset.genre;
  console.log(genre);

  const valgteFilmer = filmer.filter(film => film.genre === genre);

  // ""; nuller ut
  main.innerHTML = "";
  for(const film of valgteFilmer) {
    main.innerHTML += `
    <a href="https://www.imdb.com/title/${film.id}">
      <img src="${film.poster}">
      <p>${film.tittel}</p>
    </a>
    `;
  }
}


for(const knapp of knapper) {
  knapp.addEventListener("click", visFilmer);
}

