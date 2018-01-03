var express = require('express');
var db = require('../config');
var Class = require('../models/class');
var authVerify = require('../helpers');


var router = express.Router();

//GET all classes list
router.route("/classes")
.get((req, res, next) => {
  Class.find({})
  .then((data) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
  }, (err) => { next(err) })
  .catch((err) => { next(err) })
})

//POST create new class
router.route("/create")
.post((req, res, next) => {
  console.log(req.body.coach)
  Class.create(req.body)
  .then((data) => {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
  }, (err) => { next(err) })
  .catch((err) => { next(err) })   
})

//PUT edit existing class
//DELETE delete existing class
router.route("/edit/:classid")
.put((req, res, next) => {
  Class.findByIdAndUpdate( req.params.classid , { $set: req.body }, { new: true })
  .then((data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(data);
  }, (err) => { next(err) })
  .catch((err) => { next(err) })     
})
.delete((req, res, next) => {
  Class.findByIdAndRemove(req.params.classid)
  .then((resp) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(resp);
  }, (err) => { next(err) })
  .catch((err) => { next(err) })  
})


module.exports = router;