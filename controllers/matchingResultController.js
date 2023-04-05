const { songs } = require('../routes/songSchema');

let selectedFeatures;
let selectedMoods;
let selectedLanguage;

exports.userPostController = (req, res) => {
	console.log('test');
	const formData = req.body;
	const nextPage = formData['nextPage'];
	console.log(
		'🚀 ~ file: matchingRouter.js:38 ~ router.post ~ nextPage:',
		nextPage
	);
	res.redirect(nextPage);

	if (selectedFeatures === undefined) {
		selectedFeatures = req.body.feature;
	}

	if (selectedMoods === undefined) {
		selectedMoods = req.body.moods;
	}

	if (selectedLanguage === undefined) {
		selectedLanguage = req.body.language;
	}

	console.log(
		'🚀 ~ file: matchingRouter.js:47 ~ router.post ~ selectedMoods = req.body.moods;:',
		selectedMoods
	);
};

exports.userMatchingResultController = async (req, res) => {
	if (selectedFeatures === undefined) {
		selectedFeatures = req.body.feature;
	}

	if (selectedMoods === undefined) {
		selectedMoods = req.body.moods;
	}

	if (selectedLanguage === undefined) {
		selectedLanguage = req.body.language;
	}

	const song = await songs.find({});
	console.log('HIER IS DE SONG LISTTT 🚀 ~ file: matchingRouter.js:79 ~ router.post ~ song:', song);

	const filterSongs = (songList) => {
		if (!Array.isArray(songList)) {
			songList = [songList];
		}

		const filterOnLanguages = songList.filter((selectedSong) =>
			Array.isArray(selectedSong.language)
				? selectedSong.language.some((language) =>
					selectedLanguage.includes(language)
				)
				: selectedLanguage.includes(selectedSong.language)
		);

		const filterOnMoods = filterOnLanguages.filter((selectedSong) =>
			Array.isArray(selectedSong.moods)
				? selectedSong.moods.some((mood) => selectedMoods.includes(mood))
				: selectedMoods.includes(selectedSong.moods)
		);

		const songsFromFilter = filterOnMoods.filter((selectedSong) =>
			Array.isArray(selectedSong.feature)
				? selectedSong.feature.some((feature) =>
					selectedFeatures.includes(feature)
				)
				: selectedFeatures.includes(selectedSong.feature)
		);

		return songsFromFilter;
	};

	const filteredSongs = filterSongs(song); // Hier maak ik een variabele aan voor de liedjes uit mijn database die uit mijn filters komen.
	console.log('DE RESULTATEN VAN MATCHES:', filteredSongs); // En die gefilterde liedjes log ik vervolgens in de terminal.

	console.log('@@-- feature', selectedFeatures);
	console.log('@@-- moods', selectedMoods);
	console.log('@@-- language', selectedLanguage);

	const findBestMatch = function (
		selectedLanguage,
		selectedMoods,
		selectedFeatures,
		songsFromFilter
	) {
		// Een functie om de score van elk lied uit de filterfunctie uit te rekenen
		const calculateScore = (song) => {
			let score = 0;
			if (
				song.language &&
				(Array.isArray(song.language)
					? song.language.every((language) => selectedLanguage.includes(language))
					: selectedLanguage.includes(song.language))
			) {
				score += 3;
			}
			if (
				song.moods &&
				(Array.isArray(song.moods)
					? song.moods.every((mood) => selectedMoods.includes(mood))
					: selectedMoods.includes(song.moods))
			) {
				score += 2;
			}
			if (
				song.feature &&
				(Array.isArray(song.feature)
					? song.feature.every((feature) => selectedFeatures.includes(feature))
					: selectedFeatures.includes(song.feature))
			) {
				score += 1;
			}
			return score;
		};

		// Bereken de score van elk lied en maak van het lied + de score van het lied een nieuwe array
		const scores = songsFromFilter.map((song) => {
			return {
				song: song,
				score: calculateScore(song),
			};
		});

		console.log(scores);

		// Sorteer de liedjes per score
		scores.sort((a, b) => b.score - a.score);

		// Return het hoogst scorende lied OF null als geen liedjes zijn gevonden
		return scores.length > 0 ? scores.map((item) => item.song) : null;
	};

	const bestMatch = findBestMatch(
		selectedLanguage,
		selectedMoods,
		selectedFeatures,
		filteredSongs
	);
	console.log('DE BESTE MATCH IS:', bestMatch);

	/**========================================================================
	 *                           LAADT IN OP PAGINA
	 *========================================================================**/

	res.render('pages/matchingresult', {
		title: bestMatch[0]?.title,
		artist: bestMatch[0]?.artist,
		cover: bestMatch[0]?.cover,
		audiofile: bestMatch[0]?.audiofile,
		spotifylink: bestMatch[0]?.spotifylink,

		secondTitle: bestMatch[1]?.title,
		secondArtist: bestMatch[1]?.artist,
		secondCover: bestMatch[1]?.cover,
		secondAudiofile: bestMatch[1]?.audiofile,

		thirdTitle: bestMatch[2]?.title,
		thirdArtist: bestMatch[2]?.artist,
		thirdCover: bestMatch[2]?.cover,
		thirdAudiofile: bestMatch[2]?.audiofile,

		fourthTitle: bestMatch[3]?.title,
		fourthArtist: bestMatch[3]?.artist,
		fourthCover: bestMatch[3]?.cover,
		fourthAudiofile: bestMatch[3]?.audiofile,

		fifthTitle: bestMatch[4]?.title,
		fifthArtist: bestMatch[4]?.artist,
		fifthCover: bestMatch[4]?.cover,
		fifthAudiofile: bestMatch[4]?.audiofile,
	});
};
