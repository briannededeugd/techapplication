const express = require('express');
const router = express.Router();

const { users } = require('./userSchema');



/**----------------------
 *    Explore page
 *------------------------**/
router.get('/explore', async (req, res) => {
    console.log("jarno's following router werkt!");
    const allUsers = await users.find({});
    console.log("🚀 ~ file: followingrouter.js:15 ~ router.get ~ allUsers:", allUsers);

    res.render('pages/explore', {profiles : allUsers});
});

router.post('/follow/:profileId', async (req, res) => {
    const profileId = req.params.profileId;
    console.log("🚀 ~ file: followingrouter.js:21 ~ router.post ~ profileId:", profileId)
    
    const FOLLOW_STATUS = req.body.followStatus === 'true';
    console.log("🚀 ~ file: server.js:150 ~ APP.post ~ req.body.followStatus:", req.body.followStatus)
    
    // Update the profile's follow status in the database
    await users.findOneAndUpdate({_id: profileId}, {$set: {follow: FOLLOW_STATUS}});
  
    // Redirect the user back to the explore page
    res.redirect('/following/explore');
});
 

/**----------------------
 *    My profile page
 *------------------------**/


module.exports = router;