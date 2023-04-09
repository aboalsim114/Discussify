const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Configuration de la session
app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: true,

    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour

}));



const MURL = "mongodb+srv://sami:1234@cluster0.p6wwavj.mongodb.net/Discussify?retryWrites=true&w=majority";
mongoose.connect(MURL);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("connected to the database");
})


db.on("disconnected", () => {
    console.log("disconnected to the database");
})

// Define a route for the homepage
app.get('/', cors(), (req, res) => {
    res.send('Hello World!');
});




const InscriptionRoute = require("./routes/inscription")
app.use("/api/inscription", InscriptionRoute)

const ConnexionRoute = require("./routes/Connexion")
app.use("/api/connexion", ConnexionRoute)



const DashboardRoute = require("./routes/Dashboard")
app.use("/api/Dashboard", DashboardRoute)


// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});