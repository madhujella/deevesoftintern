var express = require('express');
var router = express.Router();

router.route("/")
.get((req, res, next) => {
  res.statusCode = 200;
  res.json({ text: "from class create" })
  next()
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end("403 Forbidden");  
  next()
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end("403 Forbidden"); 
  next()
})
.delete((req, res, next) => {
  res.statusCode = 403;
  res.end("403 Forbidden"); 
  next()
})

module.exports = router;