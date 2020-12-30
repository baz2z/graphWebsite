class Vertex {
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.state = "";
  }

  mark() {
    this.state = "marked";
  }

  draw() {
    if (this.state == "marked") {
      stroke("green")
      strokeWeight(3)
      ellipse(this.x, this.y, vertexWidth);
      stroke("rgb(30,30,30)")
      strokeWeight(1)
    } else
    if (this.state == "") {
      ellipse(this.x, this.y, vertexWidth);
    }

    textSize(17)
    text(this.name, this.x - (vertexWidth / 4), this.y)
    textSize(15)

  }
  
  drawEdges(list){
    for (var vNeighbour of list) {
        line(this.x, this.y, vNeighbour.x, vNeighbour.y);
      }
  }

}
