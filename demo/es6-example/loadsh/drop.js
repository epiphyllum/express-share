"use strict";

var _ = require('lodash');

let x = _.drop([..."123"]);
console.log(x);  // [2, 3]

let y = _.drop([..."123"], 2);
console.log(y);  // [3]

y = _.drop([..."123"], 5);
console.log(y);  // []

y = _.drop([..."123"], 0);
console.log(y);  // [1,2,3]

// _.dropRight()
// _.dropRighWhile()
// _.dropWhile
// 


_.dropRightWhile([1, 2, 3], function(n) {
    return n > 1;
});
// => [1]


var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
];
// using the `_.matches` callback shorthand
// let t = _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// console.dir(t);
//
// let u = _.pluck(t, 'user');
// console.dir(t);
// => ['barney', 'fred']

x = _.zip([..."aaa"], [..."bb"], [..."c"]);
console.dir(x);

y = _.zipObject([..."abc"], [..."ab"]);
console.dir(y);

x = _.zipWith([1, 2],[10,20], [100,200,300], _.add);
console.dir(x);

let t = _.without([1,2,3], 1,2);
console.dir(t);

console.dir(_.xor([1,2], [4,2]));  // 对称差

var exp = _.escapeRegExp('[lodash](https://lodash.com/');
console.log(exp)

_.times(3, function (n) {
   console.log(n); 
});

console.log(_.uniqueId('contact_'));
console.log(_.uniqueId('contact_'));
console.log(_.uniqueId('contact_'));
console.log(_.uniqueId('contact_'));

_.range(4)


var array = _.times(3, _.constant),
    object = { 'a': array, 'b': array, 'c': array };

let ttt = _.map(['a[2]', 'c[0]'], _.methodOf(object));
console.log(ttt)

var objects = [
    { 'a': { 'b': { 'c': 2 } } },
    { 'a': { 'b': { 'c': 1 } } }
];

console.log("---------------after------------------------------");
var saves = ['profile', 'settings'];
var done = _.after(saves.length, function() {
    console.log('done saving!');
});
done();
done();   // 2两次后, 才会被调用!!!!

// var say = _.restParam(function(what, names) {
//     return what + ' ' + _.initial(names).join(', ') +
//         (_.size(names) > 1 ? ', & ' : '') + _.last(names);
// });
//
// say('hello', 'fred', 'barney', 'pebbles');


console.log("--------------------flow---------------");
function square(n) {
    return n * n;
}
var addSquare = _.flow(_.add, square);   
console.log(addSquare(2, 2));  // (2+2) => square



console.log("--------------------map---------------");
var array = [1, 2];
var wrapped = _(array).map(function(value) {
    return Math.pow(value, 2);
});
console.log(wrapped.value());
let other = wrapped.plant([3,4]);
console.log(other.value());




