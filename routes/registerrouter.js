const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.locals.title = "Register";
    res.render("pages/register");
});

router.post("/account/:firstName", (req, res) => {
    users.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            res.status(400)({ email: "A user had already registered with this E-mail address" })
        } else {
            const newUser = new user({
                firstName: req.body.firstname,
                lastName: req.body.firstname,
                age: req.body.firstname,
                email: req.body.firstname,
                password: req.body.firstname,
                password2: req.body.firstname
            });
            newUser.save()
        }
    }
})

module.exports = router;
