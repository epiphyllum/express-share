"use strict";
// import "babel-polyfill";

var fibonacci = {
    [Symbol.iterator]: function*() {
        var pre = 0, cur = 1;
        for (;;) {
            var temp = pre;
            pre = cur;
            cur += temp;
            yield cur;
        }
    }
}

for (var n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 20)
        break;
    console.log(n);
}



///////////////////////////////////////////////////
// 可子类化的
///////////////////////////////////////////////////
// User code of Array subclass
class MyArray extends Array {
    constructor(...args) { super(...args); }
}

var arr = new MyArray();
arr[1] = 12;
console.log(arr.length == 2);


function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}



var p = timeout(1000).then(() => {
    console.log("1000 timeout over");
    return timeout(2000);
}).then(() => {
    throw new Error("hmm");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
})

