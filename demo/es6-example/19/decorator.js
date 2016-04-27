function testable(target) {
    "use strict";
    target.isTestable = true;
}

@testable
class MyTestableclass {}
console.log(MyTestableclass.isTestable);

///////////////////////////////////////

function ptestable(is) {
    "use strict";
    return function(target) {
        target.isTestable = is;
    };
}
@ptestable(true)
class MyTestableclass2 {}
console.log(MyTestableclass2.isTestable);


///////////////////////////////////////
// 设置到原型上
function ktestable(is) {
    "use strict";
    return function(target) {
        target.prototype.isTestable = is;
    };
}
@ktestable(true)
class KClass { };
let k = new KClass();
console.log(k.isTestable);


////////////////////////////////////////////
function mixin(...list) {
    "use strict";
    return function (target) {
        Object.assign(target.prototype, ...list);
    };
}
const Foo = {
    foo(){
        console.log('Foo');
    }
}
@mixin(Foo)
class MyClass {}
let obj = new MyClass();
obj.foo()


