let nameOffsetX = 10;
let nameOffsetX2 = 60;
let nameIntervalX = 60;

let nameOffsetY = 35;
let nameIntervalY = 35;
class Table {
  constructor(heightA, graph) {
    this.graph = graph;
    this.height = heightA;
    this.bfs;
  }

  drawTable() {
    if (this.graph.adjList.size >= 0) {
      let a = Array.from(this.graph.adjList.keys());
      let b = Array.from(this.graph.adjList.values());

      line(60, height - this.height, 60, height - 10);

      for (var i = 0; i < a.length; i++) {
        textSize(17)
        text(a[i].name, nameOffsetX,
          height - this.height + nameOffsetY + i * nameIntervalY)
        for (var j = 0; j < b[i].length; j++) {
          text((b[i][j].name), nameOffsetX + nameOffsetX2 + j * nameIntervalX,
            height - this.height + nameOffsetY + i * nameIntervalY);
        }
      }
    }
  }

  addBfs(bfs) {
    this.bfs = bfs;
  }

  draw() {
    for (var k = 0; k < this.bfs.p.length; k++) {
      stroke("rgb(60,60,90)")
      strokeWeight(5);
      circle(nameOffsetX + nameOffsetX2 + this.bfs.p[k] * nameIntervalX + 17,
        height - this.height + nameOffsetY + k * nameIntervalY - 20, 8);
            stroke("rgb(30,30,30)")
      strokeWeight(1)
    }
  }
}