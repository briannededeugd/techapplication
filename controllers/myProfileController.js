const { admin } = require('../routes/adminSchema');
const { songs } = require('../routes/songSchema');


/**========================================================================
 *              Loads the chosen "admin" profile from database
 *========================================================================**/

exports.loadAdminProfile = async (req, res) => {
    const adminId = req.params.adminId;
    let allSongs = await songs.find({});
    const adminProfile = await admin.findOne({ _id : adminId});

    //! Doesnt work yet, admin mood and favSongs still uncleaned 
    // const cleanedAdmin = dataFollowing.map(user => {
    // 	if (user.mood) {
    // 		user.mood = user.mood.join(', ')
    // 	}
    // 	if (user.favouriteSongs) {
    // 		user.favouriteSongs = user.favouriteSongs.join(', ')
    // 	}
    // 	return user;
    // });

    console.log(`dit is de pagina van ${adminProfile.firstName} `);
    console.log(adminProfile);

    res.render('pages/myprofile', {
        user : adminProfile,
        likedSongs: allSongs.filter(song => song.adminLike === 'true'),
    });
}