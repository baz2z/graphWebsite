let vertexWidth = 80;
let adjHeight = 0.4;
let vertexMemory = [2];
let counter = 0;
let z = 0;
let names = ["Max", "Jolin", "Ajo", "Anna", "Moe", "Petra", "Kle", "Lena"];
let bfsDraw = false;
let dfsDraw = false;
let reAlign = false;
let settingsWidth = 200;
let sel;
let init;
let step;
let del;
let re;

function setup() {
  createCanvas(700, 700);
  adjHeight = adjHeight * height;
  g = new Graph();
  t = new Table(adjHeight, g);
  b = new Bfs();
  d = new Dfs();
  s = new Setting(settingsWidth);
  s.setMe();
  que = new Que();

  //in setUp cause of "select"
  s.drawSetting();

  //default stroke and background
  stroke("rgb(30,30,30)")
  background(220);
  textSize(15);
  strokeWeight(1);
}



function keyPressed() {
  if (keyCode == 66) { //b
    s.initBFS()
  }

  if (keyCode == 78) { //n
    b.step();
  }

  if (keyCode == 68) { //d
    g.adjList.clear();
    z = 0;
    counter = 0;
  }


}

function draw() {
  background(220)
  g.draw();
  t.drawTable();
  if (bfsDraw) {
    t.drawPointer();
    que.drawQue();
  }
  if (dfsDraw) {
    t.drawPointer();
    que.drawQue();
  }
  s.drawBackground()
}


function mouseClicked() {
  if (!reAlign) {
    g.addOrConnect();
    t.graph = g;
  }
}


function mouseDragged() {
  if (reAlign) {
    if (g.isOver(mouseX, mouseY) instanceof Vertex) {
      v = (g.isOver(mouseX, mouseY));
      v.x = mouseX;
      v.y = mouseY
    }
  }
}