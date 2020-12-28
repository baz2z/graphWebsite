class Graph {
  constructor() {
    this.adjList = new Map();
  }

  getAdjList() {
    return this.adjList;
  }


  getVertex(name) {
    for (var vertex of this.adjList.keys()) {
      if (vertex.name == name) {
        return vertex;
      }
    }
  }
  

  addVertex(v) {
    // initialize the adjacent list with a
    // null array
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    if (v == w) {
      return;
    }

    if (this.adjList.get(v).includes(w)) {
      return;
    }
    this.adjList.get(v).push(w);

    // Since graph is undirected,
    // add an edge from w to v also
    this.adjList.get(w).push(v);

  }

  draw() {
    for (var [v1, list1] of this.adjList) {
      if (v1.state == "") {
        ellipse(v1.x, v1.y, vertexWidth);
      }
      if (v1.state == "marked") {
        stroke("green")
        strokeWeight(3)
        ellipse(v1.x, v1.y, vertexWidth);
        stroke("rgb(30,30,30)")
        strokeWeight(1)
      }

      textSize(17)
      text(v1.name, v1.x - (vertexWidth / 4), v1.y)

      for (var v2 of list1) {
        line(v1.x, v1.y, v2.x, v2.y);
      }
    }
  }


  isOver(mouseX, mouseY) {
    for (var vertex of this.adjList.keys()) {
      if (vertex.x - vertexWidth / 2 < mouseX && vertex.x + vertexWidth / 2 > mouseX &&
        vertex.y - vertexWidth / 2 < mouseY && vertex.y + vertexWidth / 2 > mouseY) {
        return vertex;
      }
    }
    return false;
  }

  iterateOver() {
    let a = Array.from(this.adjList);
    for (var i = 0; i < this.adjList.size; i++) {
      print(a[i]);
    }
  }


}