"use strict";

let arrlike =  {
    0: "a",
    1: "b",
    2: "c",
    length: 3
};

var arr1 = [].slice.call(arrlike);    // attention
var arr2 = Array.from(arrlike);
var arr3 = Array.prototype.slice(arrlike);
console.log(arr1, arr2, arr3);

function myarg() {
    var args = Array.from(arguments);
    args.forEach(x => console.log(x));
}

myarg(1,2,3);

Array.from("hello").forEach(x => console.log(x));

console.log("-------------------");
function foo() {
    var args = [...arguments];
    args.forEach(x => console.log(x));
}
foo(100, 200, 300);


console.log("-------------------");
Array.from([1, 2, 3], (x) => x * x).forEach(x => console.log(x));

console.log("-------------------");
Array.from([1, , 2, , 3], n => n || 0).forEach(x => console.log(x));
Array.from({length: 2}, () => 'jack').forEach(x => console.log(x));

console.log("-------------------");
Array.of(111, 222, 333).forEach(x => console.log(x));

console.log("-------------------");
console.log([1,2,3,4,5].copyWithin(2,0));

console.log("-------------------");

for( let index of ['a', 'b'].keys()) {
    console.log(index);
}

for ( let elem of ['a', 'b'].values()) {
    console.log(elem);
}

for ( let [k,v] of ['a', 'b'].entries()) {
    console.log(k, "=>", v)
}

console.log("---------ES7 includes------------");
console.log([1,2,3].includes(2));      // true
console.log([1,2,3].includes(2, 3));      // 从index=3开始搜索
console.log([1,2,3].includes(3));
console.log([1,2,NaN].includes(NaN));


// filter, join, some, every, map, fill, copyWithin
// entries,  keys values
// find findIndex

console.log("---------ES7 数组推导------------");
// var customers = [
//     {
//         name: 'Jack',
//         age: 25,
//         city: 'New York'
//     },
//     {
//         name: 'Peter',
//         age: 30,
//         city: 'Seattle'
//     }
// ];
// var results = [
//     for ( c  of customers)
//         if( c.city == "Seattle") { name: c.name, age: c.age}
// ];

console.log(results);


