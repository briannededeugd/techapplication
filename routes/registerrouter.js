const express = require('express');
const router = express.Router();
const { users } = require('./userSchema');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  res.render('pages/register');
  const allUsers = await users.find({});
});

// REGISTER ROUTE

router.post('/signup', async (req, res) => {
  // Hash the password with bcrypt
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  // Create a new user with the hashed password
  // eslint-disable-next-line new-cap
  const user = new users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email,
    password: hashedPassword,
    password2: hashedPassword,
    mood: req.body.moods
});

  try {
    // Save the user to the database
    await user.save();
    console.log(user + 'Succesfully added');

    // Redirect to the user's account page
    res.render('pages/account', { user });
  } catch (error) {
    // Handle errors
    console.log(error);
    res.redirect('/register');
  }
});

router.get('/account/:_id/', async (req, res) => {
  try {
    // Find the user by ID
    const user = await users.findById(req.params._id);

    // Render the account page with the user's information
    res.render('account', { user });
  } catch (error) {
    // Handle errors
    console.log(error);
    res.render('/signup');
  }
});

router.get('/login', (req, res) => {
  res.render('pages/login');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await users.findOne({ email });
  if (!user || user.password !== password) {
    res.send('Invalid email or password');
  } else {
    res.send('Something went wrong');
  }
});

module.exports = router;
