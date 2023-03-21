const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.send("brianne's matching router werkt!")
    console.log("brianne's matching router werkt!")
})


module.exports = router;