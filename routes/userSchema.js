const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

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
  password: {
    type: String,
    required: true
  },
  password2: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    required: false
  },
  mood: Array,
  favouriteArtist: Array,
  favouriteSongs: Array

});

const user = mongoose.model("users", userSchema);

module.exports = { user };
