"use strict";


async function f() {
    let a = await Promise.resolve(1);
    let b = await Promise.resolve(2);
    console.log(a + b);
}



var fs = require('fs');
var readFile = function(filename) {
    return new Promise(function(resolve, reject){
      fs.readFile(filename, function(error, data){
          if(error) {
              reject(error);
          } else {
              resolve(data);
          }
      }) ;
    });
};


async function readall() {
    let f1 = await readFile("./es6-example/8/async.js");
    let f2 = await readFile("./es6-example/8/async.js");
    let l1 = f1.toString().length;
    let l2 = f2.toString().length;
    console.log(l1 + l2);
}

f();
readall();
