require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const followingRouter = require('./routes/followingRouter');
const registerRouter = require('./routes/registerRouter');
const brMatchingRouter = require('./routes/brMatchingRouter');
const elMatchingRouter = require('./routes/elMatchingRouter');
const likingRouter = require('./routes/likingRouter');

const { songs } = require('./routes/songSchema');
console.log("🚀 ~ file: server.js:14 ~ songs:", songs)

const { users } = require('./routes/usersSchema');
console.log("🚀 ~ file: server.js:17 ~ users:", users)

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_URI}`;

async function main() {
    await mongoose.connect(uri,{
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Succesfully connected")
}
main().catch(err => console.log(err));

/**========================================================================
 *                           Middleware
 *========================================================================**/ 

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**========================================================================
 *                           Templating
 *========================================================================**/ 

app.set('view engine', 'ejs');


/**========================================================================
 *                           Routing
 *========================================================================**/ 

/**----------------------
 *    Home Page
 *------------------------**/
app.get('/', (req, res) => {
    res.send('Welkom op de homepagina')
});

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
app.use('/liking', likingRouter);



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
