const express = require("express");
const Router = express.Router();
const User = require("../model/Users");
const bodyParser = require('body-parser');
const session = require("express-session");


const isAdmin = (req, res, next) => {
    if (req.session.role && req.session.role == "admin") {
        next();
    } else {
        res.redirect("/connexion");
    }

}


Router.get("/", isAdmin, (req, res) => {

    res.send("Dashboard");

})


module.exports = Router;