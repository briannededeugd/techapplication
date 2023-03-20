const express = require('express');
const app = express();
const port = process.env.PORT || 3000

require("dotenv").config();

const followingRouter = require('./routes/followingrouter');
const registerRouter = require('./routes/registerrouter');



app.use('/following', followingRouter);

app.listen(port, () => {
    console.log(`Server is listening to port: ${port}`);
});
