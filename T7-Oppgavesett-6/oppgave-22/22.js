const inpHoyde = prompt("Hvor høy er du i cm?");

hoyde = Number(inpHoyde);

console.log(hoyde);

const tilInch = hoyde * 0.4;

if (isNaN(inpHoyde)) {
  document.write("Dette er ikke et tall");
  console.log("Dette er ikke et tall");
} else {
  if (hoyde >= 260 || hoyde <= 30) {
    document.write("Det går ikke");
  } else {
    document.write(
      `Du er ${hoyde} i cm som er det samme som ${tilInch} inches`
    );
  }
}
