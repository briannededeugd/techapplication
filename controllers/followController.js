const { users } = require('../routes/userSchema');


/**========================================================================
 *            User clicks follow/unfollow button on explore page
 *========================================================================**/
exports.exploreFollowButton = async (req, res) => {
    const profileId = req.params.profileId;
    console.log('🚀 ~ file: followingrouter.js:21 ~ router.post ~ profileId:', profileId);

    const followStatus = req.body.followStatus === 'true';
    console.log('🚀 ~ file: server.js:150 ~ APP.post ~ req.body.followStatus:', req.body.followStatus);

    // Update the profile's follow status in the database
    await users.findOneAndUpdate({_id: profileId}, {$set: {follow: followStatus}});

    // Redirect the user back to the explore page
    res.redirect('/following/explore');
}


/**========================================================================
 *               User clicks unfollow button on Following Page
 *========================================================================**/

exports.followingUnfollowButton = async (req, res) => {
    const profileId = req.params.profileId;
	const followStatus = req.body.followStatus === 'true';
    
	// Update the profile's follow status in the database
	await users.findOneAndUpdate({_id: profileId}, {$set: {follow: followStatus}});
  
	// Redirect the user back to the explore page
	res.redirect('/following/followlist');
}