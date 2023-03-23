const express = require('express');
const router = express.Router();
const { User } = require('./userSchema');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    res.render('pages/register');
    const allUsers = await User.find({});
    console.log('🚀 ~ file: followingrouter.js:15 ~ router.get ~ allUsers:', allUsers);
});

  // Handle form submissions
  router.post('/register', async (req, res) => {
    // Hash the password with bcrypt
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user with the hashed password
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      email: req.body.email,
      password: hashedPassword,
      password2: hashedPassword
  });

    try {
      // Save the user to the database
      await user.save();
      console.log(user);

      // Redirect to the user's account page
      res.redirect(`/account/${user._id}`);
    } catch (error) {
      // Handle errors
      console.log(error);
      res.redirect('/register');
    }
  });

  // Render the user's account page
  router.get('/account/:id', async (req, res) => {
    try {
      // Find the user by ID
      const user = await User.findById(req.params._id);

      // Render the account page with the user's information
      res.render('account', { user });
    } catch (error) {
      // Handle errors
      console.log(error);
      res.render('/register');
    }
  });

module.exports = router;
