"use strict";

function* helloworld() {
    yield "hello";
    yield "world";
    return "ending";
}

var hw = helloworld();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

///////////////////////////////
function* gen() {
    return 123 + 456;
}
var g = gen();
console.log(g.next());
let e = g[Symbol.iterator]() === g;
console.log(e);


///////////////////////////////
function* foo(x) {
    var y = 2 * (yield x + 1);
    var z = yield( y / 3);
    return (x + y + z);
}

let a = foo(5);
console.log(a.next(a.next(a.next().value).value).value);


///////////////////////////////
console.log("-----------generator 异常------------------");
function* gg() {
    while (true) {
        try {
            yield;
        } catch (e) {
            if (e != 'a') {
                console.log("重新抛出:", e);
                throw e;  // 重新跑出
            }
            console.log("内部捕获:", e);
        }
    }
}

var i = gg();
i.next();
try {
    i.throw('a');
    i.throw('b');
} catch (e) {
    console.log("外部捕获:", e);
}
console.log("----------do it again----------------");
try {
    i.throw('a');
    i.throw('b');
} catch (e) {
    console.log("外部捕获:", e);
}

console.log("----------senario A----------------");
var ggg = function*() {
    while (true) {
        yield;
        console.log(' 内部捕获', e);
    }
};

var iii = ggg();
iii.next();
try {
    iii.throw('a');
    iii.throw('b');
} catch (e) {
    console.log("外部捕获", e);
}


console.log("----------senario B----------------");
var gen1 = function*() {
    yield console.log("hello");
    yield console.log("world");
};

var g1 = gen1();

try {
    g1.throw();
} catch (e) {
    g.next();
}

