const menu = document.querySelector(".menu");
const sideNav = document.querySelector("#sideNav");

menu.onclick = () => {
  sideNav.classList.toggle("visible");
  menu.classList.toggle("visible");
};
