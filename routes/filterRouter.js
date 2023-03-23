/* eslint-disable no-undef */
// die no-undef errors zijn irritant dus het staat uit

const express = require('express');
const router = express.Router();

const { users } = require('./userSchema');

router.get('/', async (req, res) => {
    // const allUsers = users.find({mood});

    res.render('pages/filterpage');
    console.log('elaines filter router werkt!');
});

console.log(users);


module.exports = router;