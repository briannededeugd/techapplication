const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.send("jarno's following router werkt!")
    console.log("jarno's following router werkt!")
})


module.exports = router;