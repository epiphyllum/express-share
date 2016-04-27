"use strict";
var _ = require('lodash')

var greet = function(greeting, name) {
    console.log(greeting + ' ' + name);
};


var sayHelloTo = _.partial(greet, 'hello');
var greetFred = _.partial(greet, _, 'fred');

sayHelloTo("hary");
greetFred("hi");


sayHelloTo = _.partialRight(greet, 'hello', _);
greetFred = _.partialRight(greet, _, 'fred');
sayHelloTo("hary");
greetFred("hi");


var abc = function(a, b, c) {
    return [a, b, c];
};

var curried = _.curry(abc);
console.log(curried(1)(2)(3));
console.log(curried(1,2)(3));
console.log(curried(1,2,3));

curried = _.curryRight(abc);
console.log(curried(3)(2)(1));
console.log(curried(2,3)(1));
console.log(curried(1,2,3));
console.log(curried(3)(1,_)(2));







