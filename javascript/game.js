class Game {
  
  setup() {
	  time = new Time(600, 50);
	  
	  car = new Car(200, 200, 100, 100);
      car.setup();
  
      track = new Track();
      track.setup();
  
      sprite = new Sprites(200, 100, 50);
      sprite.setup();
  
      finishline = new Finishline(15000, 100);
      finishline.setup();
  
      keylistener = new KeyListener();
	}
  
	update() {
     	buttons.setup(300, 100, 600, 100, 800, 100);
		track.update();
        time.beginRaceCountdown();
		car.update();
      
		if (time.beginracecountdown < 1) {
			time.update();
			track.move();
			keylistener.keyEvents();
			finishline.update();
			sprite.update();
		}
	
		if (car.x > finishline.x) {
			buttons.hideGameButtons();
			background(255, 0, 0);
			textSize(28);
			text('You have completed the trial in ' +  time.finaltime  +  'seconds.', 300, 100);
			time.stop();
		}
	}
	
	updateFrench() {
		buttons.setupFrench(300, 100, 600, 100, 800, 100);
		track.update();
        time.beginRaceCountdown();
		car.update();
      
		if (time.beginracecountdown < 1) {
			time.updateFrench();
			track.move();
			keylistener.keyEvents();
			finishline.update();
			sprite.update();
		}
		
		if (car.x > finishline.x) {
			background(255, 0, 0);
			textSize(28);
			text("Vous avez terminé l'essai en " +  time.finaltime  +  "seconds.", 300, 100);
			time.stop();
		}
	}
}

