var express = require('express');
var router = express.Router();

router.route("/")
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', "application/json");
  res.json({ text: "from home or index" })
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
