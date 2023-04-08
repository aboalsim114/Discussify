const express = require("express");
const Router = express.Router();
const User = require("../model/Users");
const bcrypt = require("bcryptjs");
const bodyParser = require('body-parser');
const session = require("express-session");

Router.use(bodyParser.json());
Router.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));
Router.get("/", (req, res) => {
    res.send("connexion api");
});

Router.use((req, res, next) => {
    console.log(req.method, req.url, req.body);
    next();
});

Router.post('/', async(req, res) => {
    const { username, password } = req.body;

    console.log(req.body.username);
    console.log(req.body.password);

    // Find the user by username
    const user = await User.findOne({ username });

    // If the user does not exist, return an error message
    if (!user) {
        return res.status(400).json({ message: 'username invalide' });
    }


    // Compare the password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the password does not match, return an error message
    if (!passwordMatch) {
        return res.status(400).json({ message: 'mot de passe invalide' });
    }

    // Generate an authentication token
    // Create a session
    req.session.userId = user._id;
    req.session.username = user.username;
    req.session.role = user.role;

    // Redirect to the dashboard if the user is an admin, else redirect to home
    if (user.role === 'admin') {
        return res.redirect('/Dashboard');
    } else {
        console.log("logged in");
        console.log(req.session.role);
        console.log(req.session.username);
        return res.redirect('/');
    }


    // Return a success message and the token
    res.status(200).json({ message: 'Connexion réussie' });
});

module.exports = Router;