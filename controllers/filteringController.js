
/**========================================================================
 *                             Mongoose Schema
 *========================================================================**/

const { users } = require('../routes/userSchema');

/**========================================================================
 *                     See all filters and get user data
 *========================================================================**/

exports.filterOnPage = async (req, res) => {
    const allUsers = await users.find({});

    console.log("elaines filter router werkt!");
    res.render("pages/filterpage", { data: allUsers });
}

/**========================================================================
 *                          See filtered results
 *========================================================================**/

exports.getFilterResults =  async (req, res) => {
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
};