

// HTML-dokumenter
const minLink = document.querySelector("#minLink");

function hoppTilNettside(evt) {
  evt.preventDefault();
  
  document.location.href = "http://vg.no"
}

minLink.addEventListener("click", hoppTilNettside);
