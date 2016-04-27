"use strict";

import {autobind} from 'core-decorators';

class Person {
    @autobind
    getPerson() {
        return this;
    }
}

let p1 = new Person();
let p2 = p1.getPerson();
console.log(p1 === p2);