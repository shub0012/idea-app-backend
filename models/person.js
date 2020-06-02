const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    fname: {
        type: String,
        trim: true,
        required: true
    },
    lname: {
        type: String,
        trim: true,
        required: false
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: String,
        trim: true,
        required: false
    },
    portalID: {
        type: String,
        trim: true,
        required: true
    },
    account: {
        type: String,
        trim: true,
        required: false
    },
    department: {
        type: String,
        trim: true,
        required: false
    },
    focusArea: {
        type: String,
        trim: true,
        required: false
    },
    problem: {
        type: String,
        trim: true,
        required: true
    },
    solution: {
        type: String,
        trim: true,
        required: false
    }
});

const Person = mongoose.model("persondatamessages", personSchema);

module.exports = Person;