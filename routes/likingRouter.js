const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.send("bryan's liking router werkt!")
    console.log("bryan's liking router werkt!")
})


module.exports = router;