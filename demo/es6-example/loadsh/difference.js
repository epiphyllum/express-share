"use strict";
var _ = require('lodash');

let diff = _.difference([..."123abc"], [..."abc"]);
console.log(diff);