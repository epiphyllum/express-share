"use strict";
var _ = require('lodash');

var rearged = _.rearg(function (a,b,c) {
    return [a, b, c]
}, 2,0,1);

console.log(rearged(..."bca"));

