"use strict";

var moment = require('moment');

console.log(moment().format("YYYYMMDD"));

console.log(moment().subtract(10, 'days').calendar());