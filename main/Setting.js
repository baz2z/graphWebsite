let me;
class Setting {
  constructor(SetWidth) {
    this.setWidth = SetWidth;
  }

  setMe() {
    me = this;
  }

  drawBackground() {
    rect(width - this.setWidth, 1, this.setWidth - 1, height - adjHeight - 6);
    strokeWeight(0.5);
    textSize(15)
    text("select algorithm", width - this.setWidth / 2 - 40, 20)
    strokeWeight(1);
  }

  drawSetting() {
    sel = createSelect();
    sel.position(width - this.setWidth / 2 - 40, 30);
    sel.option('BFS');
    sel.option('DFS');
    sel.option('DIJKSTRA');
    sel.changed(this.mySelectEvent);
    
    re = createButton("realign Vertices")
    re.position(width - this.setWidth / 2 - 40, 80)
    re.mousePressed(me.reAlign)
    
    init = createButton("initialize")
    init.position(width - this.setWidth / 2 - 40, 200)
    init.mousePressed(me.initialize)

    step = createButton("stepForward")
    step.position(width - this.setWidth / 2 - 40, 250)
    step.size(110, 50)
    step.mousePressed(me.step)


    del = createButton("delete")
    del.position(width - this.setWidth / 2 - 40, 330)
    del.mousePressed(me.delete)

  }
  
  reAlign(){
    reAlign = !reAlign;
    if(re.html() == "realign Vertices"){
      print(re.html())
      print("hi")
      re.html("place new Vertices");
    } else {
      re.html("realign Vertices");
    }
  }

  initBFS() {
    t.addBfs(b);
    //q nur in diesem scope vorhanden
    let q = [];

    //unser startknoten
    q.push(g.getVertex("Max"));
    let boolean = new Array(g.adjList.size)
    let zeiger = new Array(g.adjList.size)
    b.set(g, q, boolean, zeiger);

    que.set(q, boolean, g);
    b.initiate();

    bfsDraw = true;
  }


  initDFS() {
    print("hi")
    t.addBfs(d);
    //q nur in diesem scope vorhanden
    let stack = [];

    //unser startknoten
    stack.push(g.getVertex("Max"));
    let boolean = new Array(g.adjList.size)
    let zeiger = new Array(g.adjList.size)
    d.set(g, stack, boolean, zeiger);

    que.set(stack, boolean, g);
    d.initiate();

    dfsDraw = true;
  }

  initialize() {
    let item = sel.value();
    switch (item) {
      case "BFS":
        me.initBFS();
        break;
      case "DFS":
        me.initDFS();
        break;
      default:
        //
    }
  }
  step() {
    let item = sel.value();
    switch (item) {
      case "BFS":
        b.step();
        break;
      case "DFS":
        d.step();
        break;
      default:
        //
    }
  }

  delete() {
    let item = sel.value();
    switch (item) {
      case "BFS":
        g.adjList.clear();
        z = 0;
        counter = 0;
        bfsDraw = false;
        break;
      case "DFS":
        g.adjList.clear();
        z = 0;
        counter = 0;
        dfsDraw = false;
        break;
      default:
        //
    }

  }

  mySelectEvent() {
    let item = sel.value();
    switch (item) {
      case "BFS":
        print("BFS Selected");
        break;
      case "DFS":
        print("DFS Selected");
        break;
      default:
        //
    }
  }




}