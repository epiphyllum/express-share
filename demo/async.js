"use strict";
var rest = require('restler');

function promise_a() {
    return new Promise(function (resolve, reject) {
        rest.get("http://localhost:3000/api/get_a").on("success", function (result) {
            console.log("got a:", result.a);
            resolve(result.a);
        });
    });
}

function promise_b() {
    return new Promise(function (resolve, reject) {
        rest.get("http://localhost:3000/api/get_b").on("success", function (result) {
            console.log("got b:", result.b);
            resolve(result.b);
        });
    });
}

function promise_add(a, b) {
    return new Promise(function (resolve) {
        rest.post('http://localhost:3000/api/add', { data: {a, b} }).on('success', function (data, response) {
            console.log(data);
            console.log("got c:", data.result);
            resolve(data.result);
        });
    });
}

async function result() {
    let a = await promise_a();
    let b = await promise_b();
    let c = await promise_add(a, b);
    console.log(a, b, c);
}

result();

