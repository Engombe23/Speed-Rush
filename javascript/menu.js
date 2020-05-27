// Menu class
class Menu {
  constructor() {
	  this.col = 255;
	  this.col2 = 0;
   }
   
   // show() method
   show() {	  
	   canvas = createCanvas(700, 500);
	   canvas.position(300, 100);
	  
	   background(this.col, this.col2, this.col2);
	} 
	
	// showEnglish() method
	showEnglish() {
		// buttons passing in x and y position and size
		buttons.playGame(500, 250, 100, 100);
		buttons.setUpInstructions(500, 450, 100, 100);
		buttons.frenchButton(800, 150, 100, 50);
	}
  
	// showFrench() method
	showFrench() {
		buttons.playGameFrench(500, 250, 100, 100);
		buttons.frenchInstructions(500, 450, 100, 100);
	}  
}
