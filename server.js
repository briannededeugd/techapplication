const express = require('express');
const app = express();
const port = process.env.PORT || 3000

require("dotenv").config();

const followingRouter = require('./routes/followingRouter');
const registerRouter = require('./routes/registerRouter');
const brMatchingRouter = require('./routes/brMatchingRouter');
const elMatchingRouter = require('./routes/elMatchingRouter');
const likingRouter = require('./routes/likingRouter');



app.use('/following', followingRouter);

app.use('/register', registerRouter);

app.use('/brmatching', brMatchingRouter);

app.use('/elmatching', elMatchingRouter);

app.use('/liking', likingRouter)


app.listen(port, () => {
    console.log(`Server is listening to port: ${port}`);
});
