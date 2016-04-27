"use strict";
var express = require('express');
var router = express.Router();
var rest = require('restler');

/**
 * callback版本  callback hell
 */
router.get("/callback", function (req, res) {
    rest.get("http://localhost:3000/api/get_a").on('success', function (data, response) {
        var a = data.a;
        rest.get("http://localhost:3000/api/get_b").on('success', function (data, response) {
            var b = data.b;
            rest.post("http://localhost:3000/api/add", {data: {a, b}}).on('success', function (data, response) {
                res.json({
                    a: a,
                    b: b,
                    c: data.result
                });
            });
        });
    });
});


module.exports = router;




