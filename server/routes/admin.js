var express = require('express');
var db = require('../config');
var User = require('../models/user');
var Class = require('../models/class');

var router = express.Router();

//GET admin dashboard details
router.route("/dashboard")
.get((req, res, next) => {
  User.count({userType: "member"}, (err, count) => {
    if(err) next(err);
    res.setHeader('Content-Type', 'application/json');
    res.json({members: count});
  })
  .catch((err) => { next(err) })  
})

//GET member credits
//PUT edit member credits
router.route("/credits/:member")
.get((req, res, next) => {
  User.findById(req.params.member)
  .then((data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
  }, (err) => { next(err) })
  .catch((err) => { next(err) })
})
.put((req, res, next) => {
  User.findByIdAndUpdate(req.params.member, { $set: { credits: req.body.credits } }, { new: true })
  .then((data) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(data)
  }, (err) => { next(err) })
  .catch((err) => { next(err) }) 
})

module.exports = router;