"use strict";
var _ = require('lodash');

function doubled(n) {
    return n * 2;
}

function square(n) {
    return n * n;
}

var modded = _.modArgs(function(x, y, z){
   return [x, y, z];
}, square, doubled, doubled )

console.log(modded(1,2,3));
