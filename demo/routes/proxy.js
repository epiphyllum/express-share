var rest = require('restler');

export function promise_a() {
    return new Promise(function (resolve, reject) {
        rest.get("http://localhost:3000/api/get_a").on("success", function (result) {
            console.log("got a:", result.a);
            resolve(result.a);
        });
    });
}

export function promise_b() {
    return new Promise(function (resolve, reject) {
        rest.get("http://localhost:3000/api/get_b").on("success", function (result) {
            console.log("got b:", result.b);
            resolve(result.b);
        });
    });
}

export function promise_add(a, b) {
    return new Promise(function (resolve) {
        rest.post('http://localhost:3000/api/add', {data: {a, b}}).on('success', function (data, response) {
            console.log(data);
            console.log("got c:", data.result);
            resolve(data.result);
        });
    });
}

//
// module.exports = { promise_a, promise_b, promise_add };
//