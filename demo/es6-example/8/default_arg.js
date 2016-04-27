"use strict";

function log(x, y) {
    y = y || 'world'
    console.log(x, y)
}

log('hello');
log('hello', "hary");
log('hello', '');

function add(...values) {
    return values.reduce((a,b) => a + b, 0);
}
console.log(add(1, 2, 3));

console.log(...[1, 2, 3]);

var x = [];
x.push(...[1, 2, 3]);
console.log(x);

function * go() {
    let a = 1;
    while(true) {
        yield a;
        a = a + 1;
        if (a > 10) {
           return; 
        } 
    }
}

[...go()].forEach( x => {
    console.log(x);
});

let person = {
    first : "hary",
    last: "jessie",
};

const full = ({ first:f, last:l }) => f + "-" + l;
console.log(full(person));

const numbers = (...numbers) => numbers;
console.log(numbers(1,2,3));

//////////////////////////////////////
// 函数绑定  ES7
Promise.resolve(123).then(::console.log);


let foo="------------------"
console.log(`
hello
world
this ${foo}
is  ${foo}
a multi -line
string hello
`);



// console.log("-------------尾逗号参数------------");
// function ff(a, b,) {
//     console.log(a, b);
// }
// ff(1,2,3);
// ff(1,2);

