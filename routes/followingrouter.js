const express = require('express');
const router = express.Router();

const { users } = require('./userSchema');
const { admin } = require('./adminSchema')



/**========================================================================
 *                           Explore Page
 *========================================================================**/

router.get('/explore', async (req, res) => {
    console.log("jarno's following router werkt!");
    const allUsers = await users.find({});
    console.log("🚀 ~ file: followingrouter.js:15 ~ router.get ~ allUsers:", allUsers);

    res.render('pages/explore', {profiles : allUsers});
});


/**----------------------
 *    Clicking the follow button
 *------------------------**/

router.post('/follow/:profileId', async (req, res) => {
    const profileId = req.params.profileId;
    console.log("🚀 ~ file: followingrouter.js:21 ~ router.post ~ profileId:", profileId);
    
    const followStatus = req.body.followStatus === 'true';
    console.log("🚀 ~ file: server.js:150 ~ APP.post ~ req.body.followStatus:", req.body.followStatus);
    
    // Update the profile's follow status in the database
    await users.findOneAndUpdate({_id: profileId}, {$set: {follow: followStatus}});
  
    // Redirect the user back to the explore page
    res.redirect('/following/explore');
});


/**========================================================================
 *                           My Profile Page
 *========================================================================**/

router.get('/myprofile/:adminId', async (req, res) => {
    let adminId = req.params.adminId;
    
    // const DATA_ADMIN = await admin.find({}).toArray();
    // console.log('@@-- data', DATA);
    let adminProfile = await admin.findOne({ _id : adminId});
    console.log(`dit is de pagina van ${adminProfile.firstName} `);
    console.log(adminProfile);
    
    res.render('pages/myprofile', {
        user : adminProfile
    });
});


/**----------------------
 *    Following page
 *------------------------**/
 
router.get('/followlist', async (req, res) => {
    const dataFollowing = await users.find({follow : true})
    // const EMPTY_MESSAGE_IMAGE_PULL = await DB_GENERAL.find({}).toArray();
    // const EMPTY_MESSAGE_IMAGE = EMPTY_MESSAGE_IMAGE_PULL.find(profile => profile.imageEmpty)
    if (dataFollowing.length < 1) {
        res.render('pages/following', {
            followingArray : dataFollowing,
            emptyMessageH2 : "You don't seem to be following anyone...",
            emptyImage : "techapplication/public/images/imageSadpepe.jpg",
            emptyMessageP : "Head on over to the explore page to find new people to follow!"

        })
    } else {
        res.render('pages/following', {
            followingArray : dataFollowing,
            emptyMessageH2 : "",
            emptyImage : "",
            emptyMessageP : ""
        })
    }
})


/**----------------------
 *    User clicks unfollow button
 *------------------------**/

router.post('/followlist/:profileId', async (req, res) => {
    const profileId = req.params.profileId;
    const followStatus = req.body.followStatus === 'true';
    
    // Update the profile's follow status in the database
    await users.findOneAndUpdate({_id: profileId}, {$set: {follow: followStatus}});
  
    // Redirect the user back to the explore page
    res.redirect('/following/followlist');
});



module.exports = router;