const express = require("express");
const Router = express.Router();
const User = require("../model/Users");
const bodyParser = require('body-parser');
const session = require("express-session");


// get all users from the database
Router.get("/", async(req, res) => {

    const users = await User.find();
    if (!users) {
        res.status(400).json({ message: "aucun utilisateurs a été trouvé" })
    }
    res.json(users);
});




// DELETE user by ID
Router.delete("/:id", async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
        res.json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});





module.exports = Router;