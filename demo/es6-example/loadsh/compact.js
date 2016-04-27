"use strict";
var _ = require('lodash');

let x = _.compact([..."abc010001"]);
console.log(x);

let y = _.compact([0,1,2,0,0,false, undefined, null, '', 3]);
console.log(y);

