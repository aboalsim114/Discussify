const express = require("express");
const Router = express.Router();
const User = require("../model/Users");
const bodyParser = require('body-parser');
const session = require("express-session");



Router.get("/", async(req, res) => {


    // get all users from the database
    const users = await User.find();

    if (!users) {
        res.status(400).json({ message: "aucun utilisateurs a été trouvé" })
    }

    res.json(users);


});

module.exports = Router;