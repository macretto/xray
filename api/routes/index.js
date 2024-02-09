const express = require('express');     // "express": "^4.18.2"
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API is working properly!');
});

module.exports = router;
