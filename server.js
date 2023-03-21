const express = require('express');
const app = express();
const port = process.env.PORT || 3000

require("dotenv").config();

const followingRouter = require('./routes/followingRouter');
const registerRouter = require('./routes/registerRouter');
const brMatchingRouter = require('./routes/brMatchingRouter');
const elMatchingRouter = require('./routes/elMatchingRouter');
const likingRouter = require('./routes/likingRouter');




/**========================================================================
 *                           Routing
 *========================================================================**/ 

/**----------------------
 *    Home Page
 *------------------------**/
app.get('/', (req, res) => {
    res.send('Welkom op de homepagina')
})

/**----------------------
 *    Jarno's Following
 *------------------------**/
app.use('/following', followingRouter);

/**----------------------
 *    Tristan's Register
 *------------------------**/
app.use('/register', registerRouter);

/**----------------------
 *    Brianne's Matching
 *------------------------**/
app.use('/brmatching', brMatchingRouter);

/**----------------------
 *    Elaine's Matching
 *------------------------**/
app.use('/elmatching', elMatchingRouter);

/**----------------------
 *    Bryan's Liking
 *------------------------**/
app.use('/liking', likingRouter)



/**========================================================================
 *                           404 Error Handler
 *========================================================================**/ 

app.use((req, res) => {
    res.status(404).send("We're sorry, we were not able to find the page you were looking for");
});


/**========================================================================
 *                           Start Webserver
 *========================================================================**/ 

app.listen(port, () => {
    console.log(`Server is listening to port: ${port}`);
});
