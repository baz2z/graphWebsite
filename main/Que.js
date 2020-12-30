class Que {
  constructor() {
    this.que;
    this.bool
    this.g;
  }

  set(que, bool) {
    this.que = que;
    this.bool = bool;
    this.g = g;
  }

  drawQue() {
    for (var i = 0; i < this.que.length; i++) {
      text(this.que[i].name, width - 100, height - adjHeight + 20 + i * 40)
    }
    
    for (var j = 0; j < this.bool.length; j++) {
      let gArray = Array.from(this.g.adjList.keys())
      if(this.bool[j]){
        textSize(13)
        text(gArray[j].name,width/2 + j * 30, height-80);
        text("1", width/2 + j * 30, height-40)
        textSize(17)
      } else{
        textSize(13)
        text(gArray[j].name,width/2 + j * 30, height-80);
        text("0", width/2 + j * 30, height-40)
        textSize(17)
      }
      
    }
  }

}