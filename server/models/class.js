var mongoose = require("mongoose");
var {Schema} = mongoose;

var classSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        minlength: 7,
        trim: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    info: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    duration: {
        type: Number,
        required: true,
        minlength: 15,
        trim: true
    },
    coach: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    whatToHave: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    maxEnrolls: {
        type: Number,
        required: true,
        minlength: 5,
        trim: true
    },
    invitation: {
        type: String,
        required: true,
        minlength: 10,
        trim: true
    },
    reqCredits: {
        type: Number,
        required: true,
        trim: true
    }


})

var Class = mongoose.model('Class', classSchema);
module.exports = Class;