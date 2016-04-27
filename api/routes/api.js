var express = require('express');
var router = express.Router();
var _ = require('lodash');

router.get('/get_a', function(req, res) {
   res.json({a:_.random(10)});
});

router.get('/get_b', function(req, res) {
   res.json({b:_.random(10)});
});

router.post('/add', function(req, res) {
  "use strict";
  console.log(req.body);
  var a = req.body.a;
  var b = req.body.b;
  res.json({result:a+b});
});

module.exports = router;
