const express = require("express");
const router = express.Router();

const { songs } = require("./songSchema");

/**========================================================================
 *                           Explore Songs
 *========================================================================**/
// redirect naar songs pagina met alle songs uit de DB
router.get("/", async (req, res) => {
  const allSongs = await songs.find({});

  res.render("pages/songs", { songs: allSongs });
});

/**----------------------
 *    Clicking the like button
 *------------------------**/

router.post("/like/:songId", async (req, res) => {
  const songId = req.params.songId;
  console.log("profileId:", songId);

  // hier kijken of likeStatus uit de body true of false is
  const likeStatus = req.body.likeStatus === "true";
  console.log("likeStatus:", likeStatus);
  // Update the profile's like status in the database
  await songs.findOneAndUpdate(
    // zoek de juiste song met de songId uit de URL
    { _id: songId },
    // update adminLike met de likeStatus uit de body
    { $set: { adminLike: likeStatus } }
  );

  // Redirect the user back to the songs page
  res.redirect("/liking");
});

module.exports = router;
