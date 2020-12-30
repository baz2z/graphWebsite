class Bfs {
  contructor() {
    this.graph;
    this.q = [];
    this.boolean = []
    this.p = []
    this.i = 0;
  }

  nextStep() {
    i++;
  }

  set(graph, q, boolean, p) {
    this.graph = graph;
    this.q = q;
    this.boolean = boolean;
    this.p = p;
  }

  getIndex(vertex) {
    return Array.from(this.graph.adjList.keys()).indexOf(vertex)
  }

  getLengthList(vertex) {
    let n = this.getIndex(vertex)
    return Array.from(this.graph.adjList.values())[n].length;
  }

  getVertexP(list, p) {
    return Array.from(list)[p];
  }

  getLast(a) {
    return a[a.length - 1];
  }

  setTrue(vertex) {
    let n = this.getIndex(vertex)
    this.boolean[n] = true;
  }

  initiate() {
    let s = this.q[0];
    for (let i = 0; i < this.boolean.length; i++) { //initiate all as false
      this.boolean[i] = false;
    }
    for (let j = 0; j < this.p.length; j++) { //initiate all as false
      this.p[j] = 0;
    }

    this.setTrue(s);
    s.mark();
    
  }

  step() {
    if (this.q.length != 0) {
      let v = this.getLast(this.q);
      let n = this.getIndex(v);

      if (this.p[n] != this.getLengthList(v)) {
        let listOfV = this.graph.adjList.get(v);
        let w = this.getVertexP(listOfV, this.p[n]);
        this.p[n]++;
        if (!this.boolean[this.getIndex(w)]) {
          this.boolean[this.getIndex(w)] = true;
          this.q.unshift(w);
          w.mark();
        }
      } else {
        this.q.pop();
      }
    }
  }
}