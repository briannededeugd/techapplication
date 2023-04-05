const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
	_id: ObjectId,
	firstName: String,
	lastName: String,
	age: String,
	email: String,
	profilePicture: String,
	mood: Array,
	favouriteArtists: Array,
	favouriteSongs: Array,
});

const admin = mongoose.model('admin', adminSchema);

module.exports = { admin };
