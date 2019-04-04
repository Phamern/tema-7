const diver = document.querySelectorAll("main div");

for(const div of diver) {
  div.style.fontSize = Math.random() * 40 + "px";
  div.style.fontFamily = Math.random() * 1;
}