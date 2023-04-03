/* eslint-disable no-undef */

const express = require("express");
const router = express.Router();

/**========================================================================
 *                             Mongoose Schema
 *========================================================================**/

const { users } = require("./userSchema");


/**========================================================================
 *                             Controllers
 *========================================================================**/

const filteringController = require('../controllers/filteringController');

/**========================================================================
 *                        Filter page and results
 *========================================================================**/

router.get('/', filteringController.filterOnPage);

router.post('/filterresults', filteringController.getFilterResults);


module.exports = router;
