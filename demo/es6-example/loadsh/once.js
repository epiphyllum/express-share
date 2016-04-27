"use strict";

var _ = require('lodash');

function create() {
    console.log("create is called");
}

var init = _.once(create);
init();
init();
init();
