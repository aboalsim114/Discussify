const express = require("express");
const Router = express.Router();
const User = require("../model/Users");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require('body-parser');

Router.use(bodyParser.json());


Router.use((req, res, next) => {
    console.log(req.method, req.url, req.body);
    next();
});



Router.post("/", async(req, res) => {

    const { username, password } = req.body;

    try {

        const user = await User.findOne({ username });

        if (user) {
            const isPasswordMatch = await bcrypt.compare(password, user.password);

            if (isPasswordMatch) {
                req.session.role = user.role;
                req.session.id = user._id;
                req.session.email = user.email;

                res.json("success");

            } else {
                res.json("Invalid password");
            }

        } else {
            res.json("Invalid username");
        }

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
});



Router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(`Error destroying session: ${err.message}`);
            res.status(500).send('Internal server error');
        } else {
            res.redirect('/');
        }
    });
});




// Error handling middleware
Router.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(500).send('Internal server error');
});

module.exports = Router;