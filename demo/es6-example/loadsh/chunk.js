"use strict";

var _ = require('lodash');

let x = _.chunk(['a', 'b', 'c', 'd'], 2);
console.dir(x);

let y = _.chunk([ ..."abcd" ], 3);
console.dir(y);

////////////////
