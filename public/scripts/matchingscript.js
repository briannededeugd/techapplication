/* eslint-disable no-undef */
console.log('js connected!!');

/**========================================================================
 *                           MAIN SONG / BEST MATCH
 *========================================================================**/

// Play button becomes pause button when clicked
const playButton = document.getElementById('play-knop');
const audio = document.getElementById('current-audio');

if (playButton) {
	// First step is checking if there's a play button on the page to avoid any errors
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

	audio.addEventListener('play', () => {
		playButton.textContent = 'pause';
	});

	audio.addEventListener('pause', () => {
		playButton.textContent = 'play_arrow';
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

/**========================================================================
 *                         SECOND BEST MATCH
 *========================================================================**/
// Play knop wordt pauzeknop als erop wordt geklikt
const playTweedeMatch = document.getElementById('play2nd');
const tweedeAudio = document.getElementById('secondaudio');

if (playTweedeMatch) {
	// Er wordt eerst gekeken of er een playknop bestaat op de pagina, zodat er geen error komt
	playTweedeMatch.addEventListener('click', () => {
		console.log('Knop geklikt');

		if (playTweedeMatch.textContent === 'play_arrow') {
			playTweedeMatch.textContent = 'pause';
			tweedeAudio.play();
		} else {
			playTweedeMatch.textContent = 'play_arrow';
			tweedeAudio.pause();
			tweedeAudio.currentTime = 0;
		}
	});

	tweedeAudio.addEventListener('play', () => {
		playTweedeMatch.textContent = 'pause';
	});

	tweedeAudio.addEventListener('pause', () => {
		playTweedeMatch.textContent = 'play_arrow';
	});
}

/**========================================================================
 *                         THIRD BEST MATCH
 *========================================================================**/
// Play knop wordt pauzeknop als erop wordt geklikt
const playDerdeMatch = document.getElementById('play3rd');
const derdeAudio = document.getElementById('thirdaudio');

if (playDerdeMatch) {
	// Er wordt eerst gekeken of er een playknop bestaat op de pagina, zodat er geen error komt
	playDerdeMatch.addEventListener('click', () => {
		console.log('Knop geklikt');

		if (playDerdeMatch.textContent === 'play_arrow') {
			playDerdeMatch.textContent = 'pause';
			derdeAudio.play();
		} else {
			playDerdeMatch.textContent = 'play_arrow';
			derdeAudio.pause();
			derdeAudio.currentTime = 0;
		}
	});

	derdeAudio.addEventListener('play', () => {
		playDerdeMatch.textContent = 'pause';
	});

	derdeAudio.addEventListener('pause', () => {
		playDerdeMatch.textContent = 'play_arrow';
	});
}

/**========================================================================
 *                         FOURTH BEST MATCH
 *========================================================================**/
// Play knop wordt pauzeknop als erop wordt geklikt
const playVierdeMatch = document.getElementById('play4th');
const vierdeAudio = document.getElementById('fourthaudio');

if (playVierdeMatch) {
	// Er wordt eerst gekeken of er een playknop bestaat op de pagina, zodat er geen error komt
	playVierdeMatch.addEventListener('click', () => {
		console.log('Knop geklikt');

		if (playVierdeMatch.textContent === 'play_arrow') {
			playVierdeMatch.textContent = 'pause';
			vierdeAudio.play();
		} else {
			playVierdeMatch.textContent = 'play_arrow';
			vierdeAudio.pause();
			vierdeAudio.currentTime = 0;
		}
	});

	vierdeAudio.addEventListener('play', () => {
		playVierdeMatch.textContent = 'pause';
	});

	vierdeAudio.addEventListener('pause', () => {
		playVierdeMatch.textContent = 'play_arrow';
	});
}

/**========================================================================
 *                         FIFTH BEST MATCH
 *========================================================================**/
const playVijfdeMatch = document.getElementById('play5th');
const vijfdeAudio = document.getElementById('fifthaudio');

if (playVijfdeMatch) {
	playVijfdeMatch.addEventListener('click', () => {
		console.log('Knop geklikt');

		if (playVijfdeMatch.textContent === 'play_arrow') {
			playVijfdeMatch.textContent = 'pause';
			vijfdeAudio.play();
		} else {
			playVijfdeMatch.textContent = 'play_arrow';
			vijfdeAudio.pause();
			vijfdeAudio.currentTime = 0;
		}
	});

	vijfdeAudio.addEventListener('play', () => {
		playVijfdeMatch.textContent = 'pause';
	});

	vijfdeAudio.addEventListener('pause', () => {
		playVijfdeMatch.textContent = 'play_arrow';
	});
}

// Initialize variables to keep track of currently playing audio
let currentlyPlaying = null;

// Get all the audio elements on the page
const audios = document.querySelectorAll('audio');

// Add event listeners to each audio element
audios.forEach((audio) => {
	audio.addEventListener('play', () => {
		// Pause the currently playing audio, if any is playing
		if (currentlyPlaying && currentlyPlaying !== audio) {
			currentlyPlaying.pause();
		}
		currentlyPlaying = audio;
	});
});
