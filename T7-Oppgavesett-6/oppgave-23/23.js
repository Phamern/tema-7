const inpVekt = document.querySelector("#inpVekt");
const inpHoyde = document.querySelector("#inpHoyde");
const btn = document.querySelector("#btn");

const info = document.querySelector("#info");

function bmiCalc(){


const vekt = Number(inpVekt.value);
const hoyde = Number(inpHoyde.value / 100);
const BMI = vekt / (hoyde ** 2);

info.innerHTML = `<h2>${BMI.toFixed(2)}</h2>`; 

if (BMI <= 18) {
  info.innerHTML += `<p>Du er undervektig</p>`
}

else if (BMI >= 25){

  info.innerHTML += `<p>Du er overvektig</p>`;
}

else {
  info.innerHTML += `<p>Du er normal</p>`;
}

} 

btn.addEventListener("click", bmiCalc);



