function setup() {
  createCanvas(500, 500);
  noLoop();
}

const tegning = [];

const midtStrek = {
  x1: 250,
  y1: 50,
  x2: 250,
  y2: 250
};

tegning.push(midtStrek);

const y = 20;

for (let i = 0; i < 5; i++) {
  const strek1 = {
    x1: 250,
    y1: 50 + y * i,
    x2: 200,
    y2: y * i + 80
  };
  tegning.push(strek1);
}

for (let i = 0; i < 5; i++) {
  const strek2 = {
    x1: 250,
    y1: 50 + y * i,
    x2: 300,
    y2: y * i + 80
  };
  tegning.push(strek2);
}

/*const strek1 = {
  x1: 250,
  y1: 50,
  x2: 200,
  y2: 100
}
const strek2 = {
  x1: 250,
  y1: 80,
  x2: 200,
  y2: 130
}
const strek3 = {
  x1: 250,
  y1: 110,
  x2: 200,
  y2: 160
}
const strek4 = {
  x1: 250,
  y1: 140,
  x2: 200,
  y2: 190
}
const strek5 = {
  x1: 250,
  y1: 50,
  x2: 250,
  y2: 300
}
const strek6 = {
  x1: 250,
  y1: 50,
  x2: 300,
  y2: 100
}
const strek7 = {
  x1: 250,
  y1: 80,
  x2: 300,
  y2: 130
}
const strek8 = {
  x1: 250,
  y1: 110,
  x2: 300,
  y2: 160
}
const strek9 = {
  x1: 250,
  y1: 140,
  x2: 300,
  y2: 190
}

tegning.push(strek1);
tegning.push(strek2);
tegning.push(strek3);
tegning.push(strek4);
tegning.push(strek5);
tegning.push(strek6);
tegning.push(strek7);
tegning.push(strek8);
tegning.push(strek9);

console.log(tegning);*/

function draw() {
  strokeWeight(5);

  for (const strek of tegning) {
    console.log(strek);
    line(strek.x1, strek.y1, strek.x2, strek.y2);
  }
}
