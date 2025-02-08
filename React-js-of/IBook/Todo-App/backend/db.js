/* eslint-disable no-undef */
const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/InoteBook";

const connectToMongo = async () => {
    const db = await mongoose.connect(mongoURI);
    console.log('mongo connected');

};

module.exports = connectToMongo;