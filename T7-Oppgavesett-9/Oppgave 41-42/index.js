const img = document.querySelector("#img");
const back = document.querySelector("#back");
const next = document.querySelector("#next");

let timer;
let imgLoop = 0;

function slides() {
  if (imgLoop >= imgSlide.length) {
    imgLoop = 0;
  }
  if (imgLoop < 0) {
    imgLoop = imgSlide.length - 1;
  }
  img.src = imgSlide[imgLoop];
  console.log(imgLoop);
}

let imgSlide = [
  "https://i-h2.pinimg.com/564x/c3/60/d7/c360d7e0abf79a5ae15bbaa1bae1a8f1.jpg",
  "https://i-h2.pinimg.com/564x/85/ec/ce/85eccedc328c32ce34f011182d664565.jpg",
  "https://i-h2.pinimg.com/564x/83/60/60/8360609d6401cb48d6b9357da3578785.jpg",
  "https://i-h2.pinimg.com/564x/5c/70/c2/5c70c230a8488d1b945ec1b2beb912bc.jpg"
];

function forover() {
  imgLoop++;
  slides();
  timer = clearInterval(timer);
  timer = setInterval(forover, 3000);
}
function bakover() {
  imgLoop--;
  slides();
  timer = clearInterval(timer);
  timer = setInterval(bakover, 3000);
}

next.onclick = forover;

back.onclick = bakover;

timer = setInterval(forover, 3000);

/*{
  for(i = 0; i < imgSlide.length; i++)
  {
  document.getElementById("img[i]").src = imgSlide[i].src;
}
}*/
