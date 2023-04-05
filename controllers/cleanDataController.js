const { users } = require('../routes/userSchema');


/**========================================================================
 *   'Cleans' user mood and songs data by joining strings together with a space and comma
 *========================================================================**/
exports.cleanUsers = async (req, res) => {
	const allUsers = await users.find({});

	const cleanedUsers = allUsers.map(user => {
		if (user.mood) {
			user.mood = user.mood.join(', ');
		}
		if (user.favouriteSongs) {
			user.favouriteSongs = user.favouriteSongs.join(', ');
		}
		return user;
	});
	
	res.render('pages/explore', {profiles : cleanedUsers});
};



let cleanedUsers = []

/**========================================================================
 *  'Cleans' user data as done above and displays zero state if necessary
 *========================================================================**/

//?  I would like to split the cleanFollowingUsers into two seperate exports but then the page keeps loading...
exports.cleanFollowingUsers = async (req, res) => {
	const dataFollowing = await users.find({follow : true});
	cleanedUsers = dataFollowing.map(user => {
		if (user.mood) {
			user.mood = user.mood.join(', ');
		}
		if (user.favouriteSongs) {
			user.favouriteSongs = user.favouriteSongs.join(', ');
		}
		return user;
	});

	if ( cleanedUsers.length < 1) {
		res.render('pages/following', {
			followingArray : cleanedUsers,
			emptyMessageH2 : 'You don\'t seem to be following anyone...',
			emptyImage : '../images/imageSadpepe.jpg',
			emptyMessageP : 'Head on over to the explore page to find new people to follow!'

		});
	} else {
		res.render('pages/following', {
			followingArray : cleanedUsers,
			emptyMessageH2 : '',
			emptyImage : '',
			emptyMessageP : ''
		});
	}
};
