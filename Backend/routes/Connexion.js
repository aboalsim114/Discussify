const express = require("express");
const Router = express.Router();
const User = require("../model/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const { customAlphabet } = require('nanoid');


const app = express();

app.use(bodyParser.json());
app.use(express.json())
app.use(cors());


const generateJWTSecret = () => {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const nanoid = customAlphabet(alphabet, 64);
    return nanoid();
};

const JWT_SECRET = generateJWTSecret();


// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

Router.use((req, res, next) => {
    console.log(req.method, req.url, req.body);
    next();
});

Router.post("/", async(req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user) {
            const isPasswordMatch = await bcrypt.compare(password, user.password);

            if (isPasswordMatch) {
                const token = jwt.sign({ userId: user._id, username: user.username, role: user.role }, JWT_SECRET);
                res.json({ token });
            } else {
                res.json("Invalid password");
            }
        } else {
            res.json("Invalid username");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
});

// Error handling middleware
Router.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(500).send("Internal server error");
});







module.exports = Router;