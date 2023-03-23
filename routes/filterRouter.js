const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("elaine's filter router werkt!");
  console.log("elaine's filter router werkt!");
});

module.exports = router;
