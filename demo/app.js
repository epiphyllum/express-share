var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('express-session')({
    // resave:false,
    // saveUninitialized:false,
    // store: require()
    secret: 'keyboard cat'
}));

app.use('/demo', require('./routes/demo'));
app.use('/async', require('./routes/async'));
app.use('/event', require('./routes/event'));
app.use('/genco', require('./routes/genco'));

app.use('/form', require('./routes/form'));
app.use('/admin', require('./routes/admin'));
app.use('/bluebird', require('./routes/bluebird'));

app.get('/redirect', function (req, res) {
    "use strict";
    setTimeout(function () {
        res.redirect('/form');
    }, 2000, 'asdfaf');
});
app.get('/file', function (req, res) {
    "use strict";
    res.sendfile(__dirname + "/app.js");   // deprecated
    // res.sendFile();
});

app.get('/render', function (req, res) {
    res.render('index.jade', {title: 'hello'});
});

app.get('/noti', function (req, res) {
    let uname = req.cookies.username;
    res.send("get username from cookie: " + uname);
});

app.get('/cookietest', function (req, res) {
    "use strict";
    res.cookie("username", 'hary');
    res.redirect('/noti');
    return;
});

// 上传文件
// 下载文件
//  
// file
// text
//
// busyboy   formidable
// ajax
// 


require('./modulea')(app);

// 5xx错误
app.get("/error", function (req, res) {
    "use strict";
    throw new Error("can not process it");
});

//
// 客户端错误
// 1. 无权限,  如没有登录,  登录后角色不对, 权限不够 etc!!!!
// 2. 参数不全
// 3. 路由无法匹配
//
// etc....
app.get("/forbidden", function (req, res) {
    "use strict";
    res.status("403");
    res.send("无权访问");
});
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}


// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

if (!module.parent) {
    app.set('port', 4000);
    app.listen(app.get('port'), function () {
        console.log('Express started on http://localhost:' +
            app.get('port') + '; press Ctrl-C to terminate.');
    });
}

