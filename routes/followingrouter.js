const express = require('express');
const router = express.Router();


/**========================================================================
 *                           Mongoose Schemas
 *========================================================================**/

const { users } = require('./userSchema');
const { admin } = require('./adminSchema');
const { songs } = require('./songSchema');


/**========================================================================
 *                           Controllers
 *========================================================================**/

const followController = require('../controllers/followController');
const cleanDataController = require('../controllers/cleanDataController');
const myProfileController = require('../controllers/myProfileController');



/**========================================================================
 *                           PAGE -- EXPLORE
 *========================================================================**/

router.get('/explore', cleanDataController.cleanUsers);


/**----------------------
 *    Clicking the follow button
 *------------------------**/

router.post('/follow/:profileId', followController.exploreFollowButton);


/**========================================================================
 *                           PAGE -- MY PROFILE
 *========================================================================**/

router.get('/myprofile/:adminId', myProfileController.loadAdminProfile);


/**========================================================================
 *                           PAGE -- FOLLOWING
 *========================================================================**/
 //?  I would like to split the cleanFollowingUsers into two seperate exports but then the page keeps loading...
router.get('/followlist', cleanDataController.cleanFollowingUsers);


/**----------------------
 *    User clicks unfollow button
 *------------------------**/

router.post('/followlist/:profileId', followController.followingUnfollowButton);



module.exports = router;