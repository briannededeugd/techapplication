const { users } = require('../routes/userSchema');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		const user = new users({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			age: req.body.age,
			email: req.body.email,
			password: hashedPassword,
			password2: hashedPassword,
			mood: req.body.moods
		});
		await user.save();
		console.log(user.firstName + ' Succesfully added');
		res.redirect('/register/login');
	} catch (error) {
		console.log(error);
		res.redirect('/register');
	}
};