const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Configuration de la session
app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: true,

    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour

}));



mongoose.connect('mongodb://root:root@localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à la base de données réussie !'))
    .catch(() => console.log('Connexion à la base de données échouée.'));



// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello World!');
});




const InscriptionRoute = require("./routes/inscription")
app.use("/api/inscription", InscriptionRoute)

const ConnexionRoute = require("./routes/Connexion")
app.use("/api/connexion", ConnexionRoute)

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});