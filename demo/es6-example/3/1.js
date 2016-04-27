var [a, b, c] =[1,2,3];

console.log(`a = $a, b = $b, c = $c`);
console.log(a, b, c);

let [foo, [[bar], baz]]  = [1, [[2], 3]];
console.log(foo, bar, baz);

let [x, y, ...z] = [1, 2, 3, 4];
console.log(x, y, z);


let obj = {};
let arr = [];

(
  {
     foo: obj.prop,
     bar: arr[0]
  }
 = { foo: 123, bar: true }
);



console.log(obj);
console.log(arr);

/// 默认值
console.log("-----------------------结构与默认值-----------------------");
var { x1 =  3} = {};
console.log(x);
var { a1, b1 = 5 } = { a1: 1};
console.log(a1, b1);


