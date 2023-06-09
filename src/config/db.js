const mongoose = require('mongoose');
require('dotenv').config();

const models = require('../models');

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB database connection established successfully');
});

module.exports = models;
