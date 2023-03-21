const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.send("elaine's matching router werkt!")
    console.log("elaine's matching router werkt!")
})


module.exports = router;