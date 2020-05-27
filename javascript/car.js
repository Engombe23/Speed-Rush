class Car {
  
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
	this.w = w;
	this.h = h;
  }
  
  setup() {
    this.car = loadImage('assets/car.png');
  }
  
  update() {
    image(this.car, this.x, this.y, this.w, this.h);
  }
  
  moveUp() {
    this.y -= 5;
    this.y = constrain(this.y, 50, height-this.y);
  }
  
  moveDown() {
    this.y += 5;
  }
  
  moveStraight() {
	  this.x += 5;
  }
  
}
