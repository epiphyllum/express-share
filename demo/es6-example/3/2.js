[ [1,2], [3,4]].map( ([a, b]) => a +b ).map( x => console.log(x));

function example() {
  return [1, 2, 3];
}
var [a, b, c] = example();

function ex2() {
  return {
    foo: 1, 
    bar: 2
  };
}
var { foo:f1, bar:b1} = ex2();
console.log(f1, b1);

function f({x, y, z}) {
  console.log(x, y, z);
}
f({ y:2, x:1, z:3});

var jsonData = {
  id: 42,
  status: "ok",
  data: [867, 5309]
};

let {id, status, data: [t1, t2]} = jsonData;

console.log(id, status, t1, t2)

var map = new Map();
map.set('1', 'one');
map.set('2', 'tow');

for( let [key, value] of map) {
  console.log(key, '==>', value);
}

function * fibs(){
  "use strict";
  let a = 0;
  let b = 1;
  while(true) {
    yield a;
    [a, b] = [b, a+b];
  }
}

for ( let fib of fibs()) {
  console.log(fib);
  if( fib > 1000) {
    break; 
  }
} 


const {s1, s2} = require("./module.js");
console.log(s1, s2);
