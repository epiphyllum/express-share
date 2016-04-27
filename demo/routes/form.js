"use strict";
var express = require('express');
var router = express.Router();
var rest = require('restler');
var utils = require('utility');


router.get("/", function(req, res){
    
    let csrf = utils.timestamp();
    req.session._csrf = csrf;
    
    res.send(`
    <html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<form action="/form" method="post">
    <input type="hidden" name="_csrf", value="${csrf}">
    <input type="text" name="username">
    <input type="text" name="password">
    <input type="submit", name="submit">
</form>
</body>
</html>
    `)
});

router.post("/", function(req, res){
    console.log(req.body);
    let { username, password, _csrf:csrf } = req.body;
    
    let sessionCsrf = req.session._csrf;
    console.log("session.csrf ", sessionCsrf);
    console.log(username, password, csrf);
    
    
    // res.sendfile("./public/form.html");


    csrf = utils.timestamp();
    req.session._csrf = csrf;

    res.send(`
    <html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<form action="/form" method="post">
    <input type="hidden" name="_csrf", value="${csrf}">
    <input type="text" name="username">
    <input type="text" name="password">
    <input type="submit", name="submit">
</form>
</body>
</html>
    `)
});

router.post("/wang/:k", function(req, res){
    let [k, m] =  [ req.params.k, req.query.m ];
    
    let { a, b } = req.body;
    console.dir(req.body);
    console.dir(m);
    console.log(`a = ${a}, b = ${b}, k = ${k}, m = ${m}`);
    res.json({a,b});
});

module.exports = router;
