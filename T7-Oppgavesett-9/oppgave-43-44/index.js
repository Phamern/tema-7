const a = document.querySelectorAll("a");
const topMenu = document.querySelector("#topMenu");

document.onmousemove = (evt) => {
 if (evt.clientY < 250) {
   topMenu.classList.add("visible");
 }
 else {
   topMenu.classList.remove("visible");
 }
}
function makeLink() {
for(const punkt of a) {
  punkt.innerHTML = `<i class="fas fa-link"> <a> ${punkt.innerHTML}</a></i>`;
  console.log(punkt);
}

}

addEventListener("load", makeLink);
console.log(makeLink);

