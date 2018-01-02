var express = require('express');
var User = require('../models/user');
var db = require('../config');
var jwt = require('jsonwebtoken');

var router = express.Router();

router.route("/signin")
.post((req, res, next) => {
  User.findOne({ email: req.body.email})
  .then((user) => {
    user.comparePassword(req.body.password, function(err, match) {
      if(match){
        var token = jwt.sign({ user: user.email }, "123");
        res.status(200).json( { user: user.email, name: user.name, type: user.userType, token } )
      }else{
        res.status(400).json({ message: "Invalid Credentials"})
      }
    })
  }, (err) => { res.status(400).json({ message: "Invalid Credentials"}) })
  .catch((err) => { res.status(400).json({ message: "Invalid Credentials"}) })
})

router.route("/signup")
.post((req, res, next) => {
  User.create(req.body)
  .then((user) => {
    var token = jwt.sign({user : user.email}, "123");
    res.status(200).json({ user: user.email, name: user.name, type: user.userType, token })
  }, (err) => { res.status(400).json({ message: "Email already exists"}) })
  .catch((err) => { res.status(400).json({ message: "Email already exists"}) })
})

module.exports = router;