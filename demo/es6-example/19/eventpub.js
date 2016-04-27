"use strict";

function publish(topic, channel) {
    return function(target, name, descriptor) {
        
        const fn = descriptor.value;
        descriptor.value = function() {
            let value = fn.apply(this, arguments);
            let ch  = channel || "/";
            let str = JSON.stringify(value);
            console.log(`发布到topic[${topic}], channel[${channel}] value[${str}]`);
        }
        
    };
}

class FooComponent {
   
    @publish("foo.some.message", "compoent")
    someMethod() {
        return {
            my: "data"
        };
    }
}

let foo = new FooComponent();
foo.someMethod();