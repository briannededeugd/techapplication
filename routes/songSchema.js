/* eslint-env node */

const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
	_id: ObjectId,
	title: String,
	artist: String,
	moods: Array,
	language: Array,
	feature: Array,
	cover: String,
	audiofile: String,
	spotifylink: String,
});

// const songs = mongoose.model('songs', songSchema);
module.exports = {
	songs: mongoose.model('songs', songSchema),
};