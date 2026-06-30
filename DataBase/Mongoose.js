const express = require('express');

const mongoose = require('mongoose');
const app = express();

app.use(express.json());
mongoose.connect("Connection string");
const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post('/signUp', async function(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const name = req.body.name;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
        name: name,
        email: email,
        password: password
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
});