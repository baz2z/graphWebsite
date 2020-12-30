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
      //draw Vertices
      v1.draw();
      //draw edges
      v1.drawEdges(list1)
    }
  }

  isOver(mouseX, mouseY) {
    for (var vertex of this.adjList.keys()) {
      if (dist(vertex.x, vertex.y, mouseX, mouseY) < vertexWidth/2) {
        return vertex;
      }
    }
    return false;
  }

  isInside(mouseX, mouseY) {
    if (mouseX > 0 && mouseX < width - settingsWidth &&
      mouseY > 0 && mouseY < height - adjHeight) {
      return true
    }
  }

  //checks weather mouse is over vertex --> add Edge to vertexMemory
  // else just add a Vertex to the graph
  addOrConnect() {
    if (this.isOver(mouseX, mouseY) instanceof Vertex) {
      if (this.isInside(mouseX, mouseY)) {
        let v = (this.isOver(mouseX, mouseY));
        vertexMemory[counter % 2] = v;
        counter++;
        if (counter % 2 == 0) {
          this.addEdge(vertexMemory[0], vertexMemory[1]);
        }
      }
    } else if (this.isInside(mouseX, mouseY)) {
      let v = new Vertex(mouseX, mouseY, names[z]);
      z++;
      this.addVertex(v);
    }
  }







  iterateOver() {
    let a = Array.from(this.adjList);
    for (var i = 0; i < this.adjList.size; i++) {
      print(a[i]);
    }
  }


}