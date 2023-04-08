const express = require("express");
const Router = express.Router();
const User = require("../model/Users");
const bodyParser = require('body-parser');
const session = require("express-session");

const isAdmin = (req, res, next) => {
    if (req.session.role == "admin") {
        next();
    } else {
        res.redirect("/connexion");
    }
}

Router.get("/", isAdmin, async(req, res) => {
    try {
        // get all users from the database
        const users = await User.find();

        // render the dashboard view with the users data
        res.render("dashboard", { users });
    } catch (error) {
        console.error(`Error retrieving users: ${error.message}`);
        res.status(500).send('Internal server error');
    }
});

module.exports = Router;