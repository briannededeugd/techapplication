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

router.get('/matchingresult', onResult);

function onResult(req, res){
	res.render('pages/matchingresult');
}

let selectedFeatures;
let selectedMoods;
let selectedLanguage;

router.post('/userPost', (req, res) => {
	console.log('test');
	const formData = req.body;
	const nextPage = formData['nextPage'];
	console.log('🚀 ~ file: matchingRouter.js:38 ~ router.post ~ nextPage:', nextPage);
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

	console.log('🚀 ~ file: matchingRouter.js:47 ~ router.post ~ selectedMoods = req.body.moods;:', selectedMoods);
	
});

router.post('/matchingresult', (req, res) => {
	console.log('yes');
	res.render('pages/matchingresult');
});
/**========================================================================
 *                           DATA VERWERKEN ETC
 *========================================================================**/
	

module.exports = router;