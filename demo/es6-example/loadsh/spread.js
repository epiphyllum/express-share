"use strict";
var _ = require('lodash');

// 可以将argumnets ===> 变成array参数
const say = _.spread(function (who, what) {
    return who + ' says ' + what;
});
say(['fred', 'hello']);


//
let numbers = Promise.all([
    Promise.resolve(40),
    Promise.resolve(60)
]);

// 本来这里的参数是[x, y]
numbers.then(_.spread(function (x, y) {
    return x + y;
}));