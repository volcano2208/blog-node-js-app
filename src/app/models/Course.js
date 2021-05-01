const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '' },
    descripton: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);