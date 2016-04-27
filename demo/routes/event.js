"use strict";
var express = require('express');
var router = express.Router();
var EventProxy = require('eventproxy');
var rest = require('restler');
var fs = require('fs');

/**
 * eventproxy版本
 */
router.get('/good1', function (req, res) {

    var ep = new EventProxy();
    ep.on('done', function (a, b, c) {
        console.log(`${a} ${b} ${c}`);
        res.json({a, b, c});
    });

    ep.all('get-a', 'get-b', function (a, b) {
        // 发起add操作
        rest.post("http://localhost:3000/api/add", {data: {a, b}}).on("success", function (result) {
            console.log("result is ", result);
            let c = result.result;
            console.log(`got result: ${c}`);
            ep.emit('done', a, b, c);
        });
    });

    // 发起 geta
    rest.get("http://localhost:3000/api/get_a").on("success", function (result) {
        console.log("got a:", result.a);
        ep.emit("get-a", result.a);
    });

    // 发起getb
    rest.get("http://localhost:3000/api/get_b").on("success", function (result) {
        console.log("got b:", result.b);
        ep.emit("get-b", result.b);
    });

});

/**
 *  相当于注册了err
 */
router.get('/fail', function (req, res) {
    var ep = new EventProxy();
    ep.fail(function (err) {
        res.send(`failed, error is ${err}`);
    });

    setTimeout(function (error) {
        ep.emit('error', error);
    }, 1000, '1000 error');
});

/**
 *
 */
router.get('/done', function (req, res) {
    var ep = new EventProxy();

    ep.once('got_a', function (a) {
        res.json(a);
    });

    // 先设置fail
    ep.fail(function (err) {
        res.send("访问错误!!!!");
    });

    // ep.done实施上是利用了 callback总是第一个参数为err
    // 帮我们在error时发射error时间

    let f = __dirname + "/event.js";
    console.log(`f = ${f}`);
    fs.readFile(f, 'utf-8', ep.done('got_a'));
});

/**
 *
 */
router.get('/donefunc', function (req, res) {
    var ep = new EventProxy();

    ep.once('got_a', function (a) {
        res.json(a);
    });

    // 先设置fail
    ep.fail(function (err) {
        res.send("访问错误!!!!");
    });

    // ep.done实施上是利用了 callback总是第一个参数为err
    // 帮我们在error时发射error时间

    let f = __dirname + "/event.js";
    console.log(`f = ${f}`);
    fs.readFile(f, 'utf-8', ep.done('got_a', function (data) {
        return "filtered data";
    }));
});

/**
 * donefail
 */
router.get('/donefail', function (req, res) {
    var ep = new EventProxy();
    ep.once('got_a', function (a) {
        res.send(a);
    });

    // 先设置fail
    ep.fail(function (err) {
        res.send(err);
    });

    var f = "./a.txt";

    fs.readFile(f, 'utf-8', ep.done('got_a'));
});

/**
 * throw
 */
router.get('/throw', function (req, res) {
    var ep = new EventProxy();
    ep.fail(function (err) {
        res.send(`error: ${err}`);
    });

    ep.throw("throw an error");
});

/**
 *  after
 */
router.get('/after', function (req, res) {
    var ep = new EventProxy();
    ep.after('got', 10, function (list) {
        res.json(list);
    });

    var _ = require('lodash');

});


/**
 *  group
 */
router.get('/group', function (req, res) {
    var ep = new EventProxy();
    ep.after('got', 10, function (list) {
        res.json(list);
    });

    var _ = require('lodash');
    let f = __dirname + "/event.js";
    _.range(10).forEach(
        x => fs.readFile(f, 'utf-8', ep.group('got')));
});

/**
 *  groupfail
 */
router.get('/group', function (req, res) {
    var ep = new EventProxy();
    ep.after('got', 10, function (list) {
        res.json(list);
    });

    var _ = require('lodash');
    _.range(10).forEach(x => fs.readFile(x, ep.group('got')));
});

/**
 * groupfunc
 */
router.get('/groupfunc', function (req, res) {
    var ep = new EventProxy();
    ep.after('got', 10, function (list) {
        res.json(list);
    });

    var _ = require('lodash');
    let f = __dirname + "/event.js";

    _.range(10).forEach(x => fs.readFile(f, 'utf-8', ep.group('got', function (data) {
        return "filtered data";
    })));
});


/**
 * emitLater doneLater
 */




module.exports = router;
