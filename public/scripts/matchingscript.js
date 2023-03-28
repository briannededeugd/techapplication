console.log('js connected!!');

// Play knop wordt pauzeknop als erop wordt geklikt
const playButton = document.getElementById('play-knop');
const audio = document.getElementById('current-audio');

if (playButton) {
	// Er wordt eerst gekeken of er een playknop bestaat op de pagina, zodat er geen error komt
	playButton.addEventListener('click', () => {
		console.log('Knop geklikt');

		if (playButton.textContent === 'play_arrow') {
			playButton.textContent = 'pause';
			audio.play();
		} else {
			playButton.textContent = 'play_arrow';
			audio.pause();
		}
	});
}

if (audio) {
	audio.addEventListener('timeupdate', () => {
		var currentTime = audio.currentTime;
		var minutes = Math.floor(currentTime / 60);
		var seconds = Math.floor(currentTime % 60);
		var timeDisplay = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
		const huidigeTijd = document.getElementById('huidige-tijd');
		const maxTijd = document.getElementById('max-tijd');

		huidigeTijd.textContent = timeDisplay;

		var duration = audio.duration;
		var minutesTotal = Math.floor(duration / 60);
		var secondsTotal = Math.floor(duration % 60);
		var timeDisplayTotal =
			minutesTotal + ':' + (secondsTotal < 10 ? '0' : '') + secondsTotal;

		maxTijd.textContent = timeDisplayTotal;

		const progressBar = document.querySelector('.progress-bar');
		if (progressBar) {
			const progressWidth = progressBar.offsetWidth;
			const progress = (currentTime / duration) * 100;

			// Update indicator positie
			const indicator = document.querySelector('.tijd-indicator');
			const indicatorPosition = (progressWidth * progress) / 100;
			indicator.style.left = `${indicatorPosition}px`;
		}
	});
}
