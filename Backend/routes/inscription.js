const express = require("express");
const Router = express.Router()
const User = require("../model/Users")
const bcrypt = require("bcryptjs");

var bodyParser = require('body-parser')

Router.use(bodyParser.json());


Router.get("/", (req, res) => {
    res.send("Register api")
})


Router.use((req, res, next) => {
    console.log(req.method, req.url, req.body);
    next();
});





// Route pour l'inscription d'un utilisateur
Router.post('/', async(req, res) => {


    const { username, email, password } = req.body;
    console.log(username);
    console.log(email);
    console.log(password);
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
    }

    // Hash the password before saving it to the database
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user document
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the user document to the database
    const savedUser = await newUser.save();




});

module.exports = Router;