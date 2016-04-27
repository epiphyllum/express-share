"use strict";
var express = require('express');
var router = express.Router();
var co = require('co');

import {promise_a, promise_b, promise_add } from './proxy';


/**
 * generator + co 版本
 * @param res
 */
function* gen(res) {
    let a = yield promise_a();    // 1> promise,  
    let b = yield promise_b();
    let c = yield promise_add(a, b);
    res.json({a, b, c});
}

router.get("/gresult", function (req, res) {
    co(gen(res));
});


/**
 * async版本
 */

module.exports = router;
