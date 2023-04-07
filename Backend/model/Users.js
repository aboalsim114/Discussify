const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }

});



// Hash the password
UserSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;