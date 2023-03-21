const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	_id: ObjectId,
	firstName: String,
	lastName: String,
	age: String,
	email: String,
	profilePicture: String,
	mood: Array,
	favouriteArtist: Array,
	favouriteSongs: Array,
});

const users = mongoose.model('users', userSchema);

module.exports = { users };