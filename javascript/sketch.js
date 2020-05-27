// Global variables
let car, track, keylistener, sprite, finishline, score, buttons, game, menu, canvas, music, time;

 //user is in menu
let isGameOn = false;
let isFrenchGameOn = false;

// called only once
function setup() {
	buttons = new Buttons();
	
	music = new Music();
	music.setUpMusic();
	
	menu = new Menu();
	menu.show();
	menu.showEnglish();
	
	gameRestart();
	gameRestartFrench();
}

function gamePaused() {
	alert('Game paused');
}

function gameRestart() {
  game = new Game();
  game.setup();
}

function gamePausedFrench() {
	alert('Jeu en pause');
}

function gameRestartFrench() {
	gameRestart();
}

function muteMusic() {
	music.stopMusic();
}

function draw() {
	if (isGameOn == true) {
		beginGame(); //start the game 
	}
	
	redraw();
	
	if (isFrenchGameOn == true) {
		beginFrenchGame(); // start game
	}
	
	redraw();
}

function loaded() {
	music.playMusic();
}

function beginGame() {
	isGameOn = true;
	game.update();
	buttons.hideButtons();
}

function beginFrenchGame() {
	isFrenchGameOn = true;
	game.updateFrench();
	buttons.displayFrenchInstructions(); // hides the french buttons
}

function showInstructions() {
	console.log('Instructions pressed');
    textSize(20);
    text('1. Move the car using W, S and D', 50, 200);
    text('2. Use W to move up.', 50, 240);
    text('3. Use S to move down.', 50, 280);
	text('4. Use D to move straight', 50, 320);
	text('5. If you collide with the sprite, you lose 10 seconds.', 50, 360);
	buttons.displayInstructions();
	buttons.returnToMenu(500, 500, 100, 50);
}

function backToMenu() {
	menu.show();
	menu.showEnglish();
	buttons.displayMenu();
	console.log('Back to the menu');
}

function changeToFrench() {
	buttons.displayFrench();
	menu.showFrench();
	console.log('Change menu to French complete');
}

function showFrenchInstructions() {
	textSize(20);
    text("1. Déplacez la voiture à l'aide de W et S.", 50, 200);
    text('2. Utilisez W pour monter.', 50, 240);
    text('3. Utilisez S pour descendre.', 50, 280);
	text('4. utilisez D pour vous déplacer tout droit.', 50, 320);
	text('5. Si vous heurtez le sprite, vous perdez 10 secondes.', 50, 360);	
	buttons.displayFrenchInstructions();
	buttons.returnToFrenchMenu(500, 500, 100, 50);
	console.log('Instructions in French');
}

function backToFrenchMenu() {
	menu.show();
	menu.showFrench();
	console.log('Back to the French menu');
}

function backToGameMenu() {
    menu.show();
    menu.showEnglish();
}
