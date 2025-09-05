const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    text: String,
    summary: String,
    createdAt: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, sparse: true },
    notes: [noteSchema],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
