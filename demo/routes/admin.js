"use strict";

var express = require('express');
var router = express.Router();

// 获取用户角色
function promise_role(uid, prole) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, prole);
    });
}

//
// 依据用户角色设置locals里的角色!!!
// 角色需要缓存么????   -- 不能缓存
// 更新用户角色, 如何及时生效???
// 后者要求用户重新登录!!!!
// 统一放入用户session当中, session内容会很大!!! -----------------
//
// 1> 显示的角色配置
// 2> 基于低粒度的权限配置
// 
//   "/admin"
router.use(function (req, res, next) {
    let user = req.session.user;
    let prole = req.query.role;
    promise_role(user, prole).then(function (role) {
        res.locals.role = role;
        next();
    });
});

// 校验权限
router.get("/hello",
    
    
    function (req, res, next) {
        console.log("aaaaaa");
        next();
    },
    function (req, res, next) {
        console.log("bbbbbb");
        next();
    },
    function (req, res) {
        res.send(res.locals.role);
    }
);

module.exports = router;
