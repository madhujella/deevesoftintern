var mongoose = require("mongoose");
var validator = require("validator");

var {Schema} = mongoose;

var classSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        minlength: 7
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        validate: {
            validator: validator.toDate
        }
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
        minlength: 15
    },
    coach: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
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
        minlength: 5
    },
    invitation: {
        type: String,
        required: true,
        minlength: 10,
        trim: true
    },
    reqCredits: {
        type: Number,
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]


}, {
    timestamps: true
})

var Class = mongoose.model('Class', classSchema);
module.exports = Class;