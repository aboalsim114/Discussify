const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');





// Configuration de la session
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true,

    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour

}));


mongoose.connect('mongodb://root:root@localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.log('Connexion à la base de données échouée.');
    } else {
        console.log('Connexion à la base de données réussie !');
    }
});



// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello World!');
});




const InscriptionRoute = require("./routes/inscription")
app.use("/inscription", InscriptionRoute)

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});