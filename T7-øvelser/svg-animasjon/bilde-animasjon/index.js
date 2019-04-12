const bildestriper = document.querySelector("#bildestriper");
const height = 600;
const rowCount = 12;
const squareHeight = height / rowCount;
const width = 300;
const columnCount = 6;
const squareWidth = width / columnCount;

bildestriper.style.gridTemplateRows = `repeat(${rowCount}, 1fr)`;
bildestriper.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;

/*for (let i = 0; i < rowCount; i++) {
  const div = document.createElement("div");
  div.style.backgroundPosition = `0px ${-i * squareWidth}px`;
  div.style.animationDelay = `${i * 100}ms`;
  div.style.animationDuration = `${Math.random() * 10}s`;
  bildestriper.appendChild(div);
}

for (let i = 0; i < columnCount; i++) {
  const div = document.createElement("div");
  div.style.backgroundPosition = `${-i * squareHeight}px 0px`;
  div.style.animationDelay = `${i * 100}ms`;
  div.style.animationDuration = `${Math.random() * 10}s`;
  bildestriper.appendChild(div);
}*/

for (let y = 0; y < rowCount; y++) {
  for (let x = 0; x < columnCount; x++) {
    const div = document.createElement("div");
    div.style.backgroundPosition = `${-x * squareHeight}px ${-y * squareHeight}px`;
    div.style.animationDelay = `${x * 100}ms`;
    div.style.animationDelay = `${y * 100}ms`;
    bildestriper.appendChild(div);
  }
}
