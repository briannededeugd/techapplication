/* eslint-disable no-undef */
// die no-undef errors zijn irritant dus het staat uit

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send('elaines filter router werkt!');
    console.log('elaines filter router werkt!');
});


module.exports = router;