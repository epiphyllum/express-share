"use strict";

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

console.log(salt);
console.log(hash);

var uuidgen = require('node-uuid');
console.log(uuidgen.v1());

var multiline = require('multiline')

var str =multiline(function(){/*
a
b
c
d
e
f
*/});

console.log(`[${str}]`);

let a = 10;
let b = 20;

var x = `
abcdef ${a} 
${b}
`;
console.log(x);



