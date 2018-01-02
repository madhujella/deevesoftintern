var mongoose = require("mongoose");
var validator = require("validator");
var bcryptjs = require('bcryptjs');


var {Schema} = mongoose;

var userSchema = new Schema({
    email: {
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
    userType: {
        type: String,
        enum: ['admin', 'coach', 'member'],
        required: true,
        trim: true
    },
    credits: {
        type: Number,
        default: 0,
        minlength: 0,
        required: true
    },
    enroll: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true
    }]
    
    // tokens: [{
    //     access: {
    //         type: String,
    //         required: true
    //     },
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]
}, {
    timestamps: true
})

userSchema.pre('save', function(next){
    var user = this;
    if(!user.isModified('password')) return next();
    bcryptjs.hash(user.password, 10).then(function(hashPassword){
        user.password = hashPassword;
        next();
    }, function(err){
        return next(err);
    })

})

userSchema.methods.comparePassword = function(password, next){
    bcryptjs.compare(password, this.password, function(err, match){
        if(err) return next(err);
        next(null, match);
    })
}

var User = mongoose.model('User', userSchema);
module.exports = User;