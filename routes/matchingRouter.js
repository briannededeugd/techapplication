//! HOE WERKT NAVIGATIE? LUKT NIET. HANDMATIG localhost:3000/matching/matchinglanguages WERKT WEL, ANDERE MANIEREN NIET 

/* eslint-disable no-undef */

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/**========================================================================
 *                        BRIANNE'S MATCHING ROUTER
 *========================================================================**/
router.get('/', async (req, res) => {
	console.log('briannes matching router werkt!');
	res.render('pages/matchingfeels');
});

router.get('/matchingelements', onElements);

function onElements(req, res) {
	res.render('pages/matchingelements');
}

router.get('/matchinglanguage', onLanguage);

function onLanguage(req, res){
	res.render('pages/matchinglanguage');
}

/**========================================================================
 *                           DATA VERWERKEN ETC
 *========================================================================**/

let selectedFeatures;
let selectedMoods;
let selectedLanguage;

router.post('/userPost', handleUserPost);

function handleUserPost(req, res) {
	const formData = req.body;
	const nextPage = formData['nextPage'];
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
}

module.exports = router;