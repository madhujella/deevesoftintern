var mongoose = require("mongoose");
var {Schema} = mongoose;
var validator = require("validator");

var userSchema = new Schema({
    email:{
        type:String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email address'
        }
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
})

var User = mongoose.model('User', userSchema);
module.exports = User;