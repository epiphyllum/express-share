"use strict";

function f() {
  console.log("I am outside");
}

(function(){
  if(false) {
    function f() {
      console.log("I am inside");
    }
  }
  f();
})();

// 最终打印结构是I am outsite


