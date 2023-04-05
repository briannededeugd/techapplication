const { users } = require('../routes/userSchema');

exports.removeUser = async (req, res) => {
	const sessionId = req.session.id;
	console.log(sessionId);
	try {
		const user = await users.findById(sessionId);
		if (!user) {
			console.log('User not found.');
			res.send('User not found');
		} else {
			await user.remove();
			console.log('User deleted successfully!');
			res.redirect('/register');
		}
	} catch (err) {
		console.log(err);
	}
};