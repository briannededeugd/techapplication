const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const { songs } = require('../routes/songSchema');
console.log('songs:', songs);

const matchingresultrouter = require('../controllers/matchingResultController');

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

function onLanguage(req, res) {
	res.render('pages/matchinglanguage');
}

router.get('/matchingresult', onResult);

function onResult(req, res) {
	res.render('pages/matchingresult');
}

router.post('/userPost', matchingresultrouter.userPostController);

router.post(
	'/matchingresult',
	matchingresultrouter.userMatchingResultController
);

/**========================================================================
 *                           DATA VERWERKEN ETC
 *========================================================================**/

module.exports = router;
