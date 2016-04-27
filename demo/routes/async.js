"use strict";
var express = require('express');
var router = express.Router();

import {promise_a, promise_b, promise_add} from './proxy';

/**
 * async 版本
 * @param res
 */
async function good(res) {
    let ab = await Promise.all([promise_a(), promise_b()])
    let c = await promise_add(ab[0], ab[1]);   // "1", "1"
    let [a, b] = ab;
    console.log(a, b, c);
    res.json({a, b, c});   // { a: a, b:b, c:c }
}
router.get('/good', function (req, res) {
    "use strict";
    good(res);
});


/**
 * async不好的版本
 * @param res
 */
async function bad(res) {
    let a = await promise_a();         // Promise
    let b = await promise_b();         //
    let c = await promise_add(a, b);   // "1", "1"
    console.log(a, b, c);
    res.json({a, b, c});   // { a: a, b:b, c:c }
}
router.get('/bad', function (req, res) {
    "use strict";
    bad(res);    // co + generator == async + await
    console.log();
});


module.exports = router;