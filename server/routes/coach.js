var express = require('express');
var router = express.Router();
var authVerify = require('../helpers');

router.route("/")
.get((req, res, next) => {
  res.statusCode = 200;
  res.json({ text: "coach" })
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end("403 Forbidden");  
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end("403 Forbidden"); 
})
.delete((req, res, next) => {
  res.statusCode = 403;
  res.end("403 Forbidden"); 
})

module.exports = router;