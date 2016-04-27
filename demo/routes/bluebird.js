"use strict";
import BB from "bluebird";
var express = require('express');
var router = express.Router();


let fs = BB.promisifyAll(require('fs'));

router.get('/fs', function (req, res) {
    fs.readFileAsync(__dirname + "/bluebird.js").then(function (data) {
        res.type('text/html');
        res.send(data);
    })
});


var rest = require('restler');

export function promise_a() {
    return new BB(function (resolve, reject) {
        rest.get("http://localhost:3000/api/get_a").on("success", function (result) {
            console.log("got a:", result.a);
            resolve(result.a);
        });
    });
}

export function promise_b() {
    return new BB(function (resolve, reject) {
        rest.get("http://localhost:3000/api/get_b").on("success", function (result) {
            console.log("got b:", result.b);
            resolve(result.b);
        });
    });
}

export function promise_add(a, b) {
    return new BB(function (resolve) {
        rest.post('http://localhost:3000/api/add', {data: {a, b}}).on('success', function (data, response) {
            console.log(data);
            console.log("got c:", data.result);
            resolve(data.result);
        });
    });
}


async function good(res) {
    let ab = await BB.all([promise_a(), promise_b()])
    let c = await promise_add(ab[0], ab[1]);   // "1", "1"
    let [a, b] = ab;
    console.log(a, b, c);
    res.json({a, b, c});   // { a: a, b:b, c:c }
}
router.get('/good', function (req, res) {
    "use strict";
    good(res);
});


module.exports = router;





