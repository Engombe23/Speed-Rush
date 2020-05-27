class Sprites {
  
  constructor(y, w, h) {
    this.y = y;
	this.w = w;
	this.h = h;
    this.sprites = [];
    this.spritespeed = random(15, 30);
  }
  
  setup() {
    for (let i = 0; i < 50; i++) {
      this.sprite = loadImage('assets/sprite.png');
      this.sprites.push(i*750);
    }
  }
  
  update() {
  for (let i = 0; i < this.sprites.length; i++) {
    image(this.sprite, this.sprites[i], this.y);
    this.sprites[i] -= this.spritespeed;
	if(car.x > this.sprites[i]-this.w && car.x < this.sprites[i]+this.w && car.y > this.y-this.h && car.y < this.y+this.h) { // images overlap
			time.timer -= 10;
			car.x -= 20;
			car.moveStraight();
		} 
    }
  }
}
