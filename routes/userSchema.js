const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	_id: ObjectId,
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	age: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	profilePicture: {	
		type: String,
		required: false
	},
	mood: Array,
	favouriteArtists: Array,
	favouriteSongs: Array,
	follow: Boolean,
	password: {
		type: String,
		required: true
	},
	password2: {
		type: String,
		required: true
	}
});

const users = mongoose.model('users', userSchema);

module.exports = { users };
