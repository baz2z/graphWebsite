class Vertex {
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.state = "";
  }
  
  mark(){
    this.state = "marked";
  }

}