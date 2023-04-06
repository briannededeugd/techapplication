/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const passport = require('passport');
const compression = require('compression');

/**========================================================================
 *                           Requiring the seperate routes
 *========================================================================**/

const followingRouter = require('./routes/followingRouter');
const registerRouter = require('./routes/registerrouter');
const matchingRouter = require('./routes/matchingRouter');
const filterRouter = require('./routes/filterRouter');
const likingRouter = require('./routes/likingRouter');

/**========================================================================
 *                           Requiring the mongoose schemas
 *========================================================================**/

const { songs } = require('./routes/songSchema');
const { users } = require('./routes/userSchema');
const { admin } = require('./routes/adminSchema');

/**========================================================================
 *                           Defining and connecting to database
 *========================================================================**/

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${process.env.DB_URI}`;

async function main() {
	await mongoose.connect(uri, {
		dbName: process.env.DB_NAME,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log('Succesfully connected');
}
main().catch((err) => console.log(err));

/**========================================================================
 *                           Middleware
 *========================================================================**/

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.disable('etag');

/**========================================================================
 *                           Templating
 *========================================================================**/

app.set('view engine', 'ejs');


/**========================================================================
 *                           Sessions
 *========================================================================**/

const sessionSecret = process.env.SESSION_SECRET;
const store = new MongoDBStore({
	uri: uri,
	collection: process.env.DB_COLLECTION_SESSIONS
});

app.use(session({
	secret: sessionSecret,
	resave: false,
	saveUninitialized: true,
	store: store
}));

//Catch and store errors
store.on('error', (error) => {
	console.log(error);
});

app.use(passport.initialize());
app.use(passport.session());


/**========================================================================
 *                           Routing
 *========================================================================**/

/**----------------------
 *    Home Page
 *------------------------**/
app.get('/', async (req, res) => {
	res.send('Welkom op de homepagina');

	try {
		const allSongs = await songs.find({});
		console.log('🚀 ~ file: server.js:66 ~ app.get ~ allSongs:', allSongs);

		const allUsers = await users.find({});
		// console.log("🚀 ~ file: server.js:61 ~ app.get ~ allUsers:", allUsers)

		const allAdmins = await admin.find({});
		// console.log("🚀 ~ file: server.js:73 ~ app.get ~ allAdmins:", allAdmins)
	} catch (error) {
		console.error(error);
	}
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
app.use('/matching', matchingRouter);

/**----------------------
 *    Elaine's Matching
 *------------------------**/
app.use('/filter', filterRouter);

/**----------------------
 *    Bryan's Liking
 *------------------------**/
app.use('/liking', likingRouter);

/**========================================================================
 *                           404 Error Handler
 *========================================================================**/

app.use((req, res) => {
	res
		.status(404)
		.send(
			'We`re sorry, we were not able to find the page you were looking for'
		);
});

/**========================================================================
 *                           Start Webserver
 *========================================================================**/

app.listen(port, () => {
	console.log(`Server is listening to port: ${port}`);
});
