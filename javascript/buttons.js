class Buttons {
	
	playGame(playgamex, playgamey, playgamesizew, playgamesizeh) {
		this.playgame = createButton('Game');
		this.playgame.position(playgamex, playgamey);
		this.playgame.size(playgamesizew, playgamesizeh);
		this.playgame.mousePressed(beginGame);
	}
  
	setUpInstructions(instructionsx, instructionsy, instructionssizew, instructionssizeh) {
		this.instructions = createButton('Instructions');
		this.instructions.position(instructionsx, instructionsy);
		this.instructions.size(instructionssizew, instructionssizeh);
		this.instructions.mousePressed(showInstructions); 
	}
  
	displayInstructions() {
		this.playgame.hide();
		this.instructions.hide();
		this.french.hide();
	}
	
	returnToMenu(returnmenux, returnmenuy, sizex, sizey) {
		this.returnmenu = createButton('Return to Menu');
		this.returnmenu.position(returnmenux, returnmenuy);
		this.returnmenu.size(sizex, sizey);
		this.returnmenu.mousePressed(backToMenu);
	}
  
	displayMenu() {
		this.returnmenu.hide();
	}
  
	frenchButton(buttonx, buttony, buttonw, buttonh) {
		this.french = createButton('French');
		this.french.position(buttonx, buttony);
		this.french.size(buttonw, buttonh);
		this.french.mousePressed(changeToFrench);
	}
  
	displayFrench() {
		this.playgame.hide();
		this.instructions.hide();
	}
  
	playGameFrench(gamefrenchx, gamefrenchy, gamefrenchw, gamefrenchh) {
		this.playgamefrench = createButton('Jouer le jeu');
		this.playgamefrench.position(gamefrenchx, gamefrenchy);
		this.playgamefrench.size(gamefrenchw, gamefrenchh);
		this.playgamefrench.mousePressed(beginFrenchGame);
	}
  
	frenchInstructions(x, y, w, h) {
		this.instructionsfrench = createButton('Instructions');
		this.instructionsfrench.position(x,y);
		this.instructionsfrench.size(w,h);
		this.instructionsfrench.mousePressed(showFrenchInstructions);
	}
  
	displayFrenchInstructions() {
		this.french.hide();
		this.playgamefrench.hide();
		this.instructionsfrench.hide();
	}
  
	returnToFrenchMenu(frenchmenux, frenchmenuy, frenchmenuw, frenchmenuh) {
		this.returntofrenchmenu = createButton('Retour au menu');
		this.returntofrenchmenu.position(frenchmenux, frenchmenuy);
		this.returntofrenchmenu.size(frenchmenuw, frenchmenuh);
		this.returntofrenchmenu.mousePressed(backToFrenchMenu);
	}
  
	hideButtons() {
		this.playgame.hide();
		this.instructions.hide();
		this.french.hide();
	}
	
    setup(pausex, pausey, restartx, restarty, mutex, mutey) {
		this.pause = createButton('Pause');
		this.pause.position(pausex, pausey);
		this.pause.mousePressed(gamePaused);
		
		this.restart = createButton('Restart');
		this.restart.position(restartx, restarty);
		this.restart.mousePressed(gameRestart);
		
		this.mute = createButton('Mute');
		this.mute.position(mutex, mutey);
		this.mute.mousePressed(muteMusic);
	}
	
	setupFrench(pausefrenchx, pausefrenchy, restartfrenchx, restartfrenchy, mutefrenchx, mutefrenchy) {
		this.paused = createButton('Pause');
		this.paused.position(pausefrenchx, pausefrenchy);
		this.paused.mousePressed(gamePausedFrench);
		
		this.restartfrench = createButton('Redémarrer');
		this.restartfrench.position(restartfrenchx, restartfrenchy);
		this.restartfrench.mousePressed(gameRestartFrench);
		
		this.mutefrench = createButton('Muet');
		this.mutefrench.position(mutefrenchx, mutefrenchy);
		this.mutefrench.mousePressed(muteMusic);
	}
  
    hideGameButtons() {
		this.pause.hide();
		this.restart.hide();
	}
}