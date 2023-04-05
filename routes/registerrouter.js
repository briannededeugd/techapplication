const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { users } = require('./userSchema');

/**========================================================================
 *                           Register Page
 *========================================================================**/

router.get('/', (req, res) => {
  res.render('pages/register');
});

router.post('/', async (req, res) => {
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
});

/**========================================================================
 *                           Login Page
 *========================================================================**/

router.get('/login', (req, res) => {
  res.render('pages/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/register/account',
  failureRedirect: '/register/login'
}));

/**========================================================================
 *                             Account Page
 *========================================================================**/

router.get('/account', (req, res) => {
  res.render('pages/account');
});

/**========================================================================
 *                         Passport Authentication
 *========================================================================**/

passport.use(new LocalStrategy({
  usernameField: 'email'
},
async function(email, password, done) {
  try {
      const user = await users.findOne({ email: email });
      if (!user) {
          return done(null, false, { feedback: 'Incorrect email.' });
      }
      const result = await bcrypt.compare(password, user.password);
      if (!result) {
          return done(null, false, { feedback: 'Incorrect password.' });
      }
      return done(null, user);
  } catch (err) {
      return done(err);
  }
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
  console.log('User logged out')
});

passport.deserializeUser(function(obj, done) {
  done(null, false);
  console.log('User logged in')
});


/**========================================================================
 *                           Logout Route
 *========================================================================**/

router.post('/logout', (req, res, next) => {
  if (req.session) {
    req.logout((err) => {
      if (err) { return next(err); }
      req.session.destroy((err) => {
        console.log('session destroyed');
        res.clearCookie('connect.sid');
        if (err) { return next(err); }
        res.redirect('/register/login');
      });
    });
  }
});

/**========================================================================
 *                       Authentication Middleware
 *========================================================================**/

// function checkAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect('/register/login');
// };

// function checkNotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return res.redirect('/register/account');
//   }
//   next();
// };

module.exports = router;