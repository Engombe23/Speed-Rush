// Music class
class Music {

	setUpMusic() {
		this.song = loadSound('assets/fire_funk_proud_music_preview.mp3', loaded);
	}
	
	// playMusic() method
	playMusic() {
		this.song.loop();
		this.song.setVolume(0.5);
	}
	
	stopMusic() {
		this.song.stop();
	}
}
