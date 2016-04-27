"use strict";

let x = 10;
let y = 10;
var bar = { x, y };
console.log(bar);

console.log(
    (function(x, y) {
    return {x, y};
})(1,2)
);

var o = {
    hello(){
        console.log("hell world");
    }
}
o.hello();

let birth = 100;
var p = {
    name: "张三",
    birth,
    hello(){
        console.log("我的名字是 " + this.name, " age is ", this.birth);
    }
}; 

p.hello();


