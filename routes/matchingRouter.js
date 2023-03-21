const express = require("express");
const router = express.Router();

/**========================================================================
 *                        BRIANNE'S MATCHING ROUTER
 *========================================================================**/
router.get("/", async (req, res) => {
	res.send("brianne's matching router werkt!");
	console.log("brianne's matching router werkt!");
});

// TEST

module.exports = router;
