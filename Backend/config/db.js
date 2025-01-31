/* eslint-disable no-undef */
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

// eslint-disable-next-line no-undef
const MONGO_URI = process.env.MONGO_URI || "" ;

// require('dotenv').config();
const connection = mongoose.connect(MONGO_URI);
module.exports= {
    connection
}
