/*const imgPile = document.querySelector("#imgPile");
const img5 = document.querySelector("#img5");
const img4 = document.querySelector("img4");
const img3 = document.querySelector("img3");
const img2 = document.querySelector("img2");
const img1 = document.querySelector(".img1");
const move = document.querySelector(".move");
*/
/*console.log(imgPile.children);

function imgMove(i) {
  console.log(i);
  const img = document.getElementById(`img${i}`);
  console.log(img);
  setTimeout( () => {
    img.classList.add("move");

  },i * 100)
}
imgPile.onmouseover = () => {
  console.log(imgPile.length);
  for (let i = 1; i < imgPile.children.length; i++) {
    console.log(i);
    imgMove(i);
  }
};

function imgBack(i) {
  
  const img = document.getElementById(`img${i}`);
  img.classList.remove("move");
}

imgPile.onmouseout = () => {
  for (let i = 1; i < imgPile.children.length; i++) {
    imgBack(i);
  }
};*/

const all = document.querySelectorAll("#imgPile img");

imgPile.onmouseover = () => {
  for(const img of all) {
    img.classList.add("move");
  }
}
 imgPile.onmouseout = () => {
   for(const img of alle) {
     img.classList.remove("move");
   }
 }
