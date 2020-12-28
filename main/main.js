let vertexWidth = 80;
let adjHeight = 0.4;
let vertexMemory = [2];
let counter = 0;
let z = 0;
let names = ["Max", "Jolin", "Ajo", "Anna", "Moe", "Petra", "Kle", "Lena"];
let locked = true;
let bfsDraw = false;


function setup() {  
  var canvas = createCanvas(800, 800);
 canvas.position(displayWidth/2 - width/2, displayHeight/2 - height / 2)
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  adjHeight = adjHeight * height;
  g = new Graph();
  t = new Table(adjHeight, g);
  b = new Bfs();
  que = new Que();
}



function keyPressed() {
  if (keyCode == 82) { //r
    locked = !locked;
  }
  if (keyCode == 66) { //b
    t.addBfs(b);
    //q nur in diesem scope vorhanden
    q = [];
    
    //unser startknoten
    q.push(g.getVertex("Max"));
    let boolean = new Array(g.adjList.size)
    let zeiger = new Array(g.adjList.size)
    b.set(g, q, boolean, zeiger);
    
    que.set(q, boolean, g);
    b.initiate();

    bfsDraw = true;
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
  stroke("rgb(30,30,30)")
  background(220);
  g.draw();
  strokeWeight(10);
  rect(0, height - adjHeight, width, adjHeight - 10);
  strokeWeight(1);
  t.drawTable();

  if (bfsDraw) {
    t.draw();
    que.drawQue();
  }
}


function mouseClicked() {
  if (locked) {
    if (g.isOver(mouseX, mouseY) instanceof Vertex) {
      v = (g.isOver(mouseX, mouseY));

      vertexMemory[counter % 2] = v;
      counter++;
      if (counter % 2 == 0) {
        g.addEdge(vertexMemory[0], vertexMemory[1]);
      }

    } else {
      v = new Vertex(mouseX, mouseY, names[z]);
      z++;
      g.addVertex(v);
    }

    t.graph = g;

  }
}

function mouseDragged() {
  if (!locked) {
    if (g.isOver(mouseX, mouseY) instanceof Vertex) {
      v = (g.isOver(mouseX, mouseY));
      v.x = mouseX;
      v.y = mouseY;
    }
  }
}