"use strict";
function timeout(ms, value) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, value); 
    });
}

function add(ms, a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, a+b);
    });
}

let p1 = timeout(1000, 10);
let p2 = timeout(2000, 20);

let pall = Promise.all([p1, p2]);

// ab是个数组
pall.then(function (ab) {
    let [a, b] = ab;
    console.log(`got a = ${a}, b =  ${b}`);
    return add(1000, a, b);
}).then(function (c) {
    console.log("final result", c);
});

async function result() {
    let k1 = await timeout(1000, 10);
    let k2 = await timeout(1000, 20);
    let k3 = await add(1000, k1, k2) ;
    console.log("final k3 = ", k3);
}

result();



