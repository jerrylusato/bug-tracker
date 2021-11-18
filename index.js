const axios = require('axios');
const mongoose = require('mongoose');
const config = require('config');
const bugs = require('./routes/bugs');
const path = require('path');
const express = require('express');
const app = express();

mongoose.connect(config.get('mongoURI'))
.then(() => console.log('Connected to mongoDB....'))
.catch(err => {
    console.log("Failed to connect to mongoDB....");
})

// Connecting to the database

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/errors', bugs);


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));