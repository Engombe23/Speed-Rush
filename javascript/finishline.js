class Finishline {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  setup() {
    this.finishline = loadImage('assets/finishline.png');
  }
  
  update() {
    image(this.finishline, this.x, this.y);
    this.x -= 50;
  }
}
