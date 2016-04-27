"use strict";

function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

function nonenumerable(target, name, descriptor) {
    descriptor.enumerable = false;
    return descriptor;
}

class Person {
    
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    
    @readonly
    name() {
        return `${this.first} ${this.last}`;
    }
    
    @nonenumerable
    get kidCount() {
        return 1;
    }
}

let p = new Person('hary', 'jessie');
console.log(p.name());