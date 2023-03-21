const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.send("tristan's register router werkt!")
    console.log("tristan's register router werkt!")
})


module.exports = router;