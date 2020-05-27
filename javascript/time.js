class Time {
  
  constructor(x, y) {
	this.currentTime = 60;
    this.timer = 60;
	this.beginracecountdown = 3;
    this.x = x;
    this.y = y;
	this.txtSize = 50;
  }
  
  beginRaceCountdown() {
	 textSize(this.txtSize);
	 textAlign(CENTER);
	 text(this.beginracecountdown, width/2, height/2);
	 
	 if (frameCount % 30 == 0 && this.beginracecountdown != 0) {
		 this.beginracecountdown --;
	 }
	 
	 if (this.beginracecountdown == 0) {
		 textSize(0);
	 }
  }
  
  update() {
    textSize(this.txtSize);
    textAlign(CENTER);
    text(this.timer, this.x, this.y);
    
    if (frameCount % 10 == 0 && this.timer > 0) {
      this.timer--;  
    }
	
	if (this.timer == 30) {
		track.accelerate();
	}
    
    if (this.timer == 0 || this.timer < 0) {
		textSize(32);
		fill(255);
		background(0);
		text('Game over', 300, 150);
		text('Press the button to restart', 300, 250);
		sprite.stop();
    }
	
	this.finaltime = this.currentTime - this.timer;
  }
  
  updateFrench() {
	  textSize(this.txtSize);
	  textAlign(CENTER);
      text(this.timer, this.x, this.y);
    
	  if (frameCount % 20 == 0 && this.timer > 0) {
		this.timer--;  
	}
	
	  if (this.timer == 30) {
		track.accelerate();
	}
	  
	  if (this.timer == 0 || this.timer < 0) {
		textSize(32);
		fill(255);
		background(0);
		text('Jeu terminé.', 300, 150);
		text('Appuyez sur le bouton pour redémarrer.', 300, 250);
		sprite.stop();
    }
	
	this.finaltime = this.currentTime - this.timer;
  }
}