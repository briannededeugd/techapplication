/* eslint-disable no-undef */
// no-undef errors are annoying so turned it off

const express = require("express");
const router = express.Router();

const { users } = require("./userSchema");

router.get("/", async (req, res) => {
  const allUsers = await users.find({});
  console.log("elaines filter router werkt!");
  res.render("pages/filterpage", { data: allUsers });
});

router.post("/filterresults", async (req, res) => {
  // Search for both moods or favourite artists in the database and render in view
  const filteredUsers = await users.find({
    $or: [
      { mood: req.body.mood },
      { favouriteArtists: req.body.favouriteArtists },
    ],
  });

  // Show the user the options they selected
  const filterOptions = [req.body.mood, req.body.favouriteArtists];

  console.log(filteredUsers);
  console.log(filterOptions);

  res.render("pages/filterresults", {
    data: filteredUsers,
    filters: filterOptions,
  });
});

module.exports = router;
