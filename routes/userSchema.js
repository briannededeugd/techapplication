const { ObjectId } = require('mongodb');
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
	follow : Boolean,
});

const users = mongoose.model('users', userSchema);

module.exports = { users };