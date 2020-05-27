class KeyListener {
  
  keyEvents() {
	  if (keyIsDown(87)) {  // W key
		car.moveUp();
	}
	  
	if (keyIsDown(83)) { // S key
		car.moveDown();
	}
	
	if (keyIsDown(68)) { // D key
		car.moveStraight();
	}
  }
}
