/* eslint-disable no-unused-vars */
const express = require('express');
const router = express.Router();
const passport = require('passport');

const { users } = require('./userSchema');

const registerController = require('../controllers/registerController');
const logController = require('../controllers/logController');
const passportController = require('../controllers/passportController');
const removeController = require('../controllers/removeController');

/**========================================================================
 *                           Register Page
*========================================================================**/

router.get('/', (req, res) => {
	res.render('pages/register');
});

router.post('/', registerController.registerUser);

/**========================================================================
 *                           Login Page
*========================================================================**/

router.get('/login', (req, res) => {
	res.render('pages/login');
}); 

router.post('/login', logController.loginUser);

/**========================================================================
 *                             Account Page
*========================================================================**/

router.get('/account', (req, res) => {
	res.render('pages/account');
});

/**========================================================================
 *                         Passport Authentication
*========================================================================**/

passport.use(passportController.strategy);

passport.serializeUser(passportController.serializeUser);

passport.deserializeUser(passportController.deserializeUser);


/**========================================================================
 *                           Logout Route
 *========================================================================**/

router.post('/logout', logController.logoutUser);

/**========================================================================
 *                           Remove Route
 *========================================================================**/

router.post('/remove', removeController.removeUser);

/**========================================================================
 *                       Authentication Middleware
 *========================================================================**/


//! Is nog niet van nut omdat user authenticated blijft
// function checkAuthenticated(req, res, next) {
// 	if (req.isAuthenticated()) {
// 		return next();
// 	}
// 	res.redirect('/register/login');
// }

// function checkNotAuthenticated(req, res, next) {
// 	if (req.isAuthenticated()) {
// 		return res.redirect('/register/account');
// 	}
// 	next();
// }

module.exports = router;
