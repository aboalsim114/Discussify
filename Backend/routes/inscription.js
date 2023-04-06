const express = require("express");
const Router = express.Router()



// Route pour l'inscription d'un utilisateur
Router.post('/register', async(req, res) => {
    try {
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
        }

        // Crypter le mot de passe avant de l'enregistrer dans la base de données
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Créer un nouvel utilisateur
        const user = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        // Enregistrer l'utilisateur dans la base de données
        const savedUser = await user.save();

        // Générer un jeton d'authentification
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

        res.status(201).json({ msg: "user crée avec success", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
    }
});









module.exports = Router;