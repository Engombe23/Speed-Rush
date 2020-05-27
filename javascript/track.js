class Track {
  
  constructor() {
    this.scrollSpeed = 30;
    this.x1 = 0;
    this.x2 = width;
  }
  
  setup() {
    this.track = loadImage('assets/track.png');
  }
  
  update() {
    image(this.track, this.x1, 0, width, height);
    image(this.track, this.x2, 0, width, height);
  }
  
  move() {
	  this.x1 -= this.scrollSpeed;
	  this.x2 -= this.scrollSpeed;
    
      if (this.x1 < -width) {
		this.x1 = width;
	  }
    
	  if (this.x2 < -width) {
		this.x2 = width;
	}
  }
  
  accelerate() {
	  this.scrollSpeed = 40;
  }
}
