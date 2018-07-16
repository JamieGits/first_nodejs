const express = require('express');
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const jade = require('jade');
const ejs = require('ejs');

var server = express();
server.listen(8080);

//解析cookie
server.use(cookieParser('jkkcjdcbkcdbck'));
//使用session
var arr = [];
for (var i = 0; i < 10000; i++) {
    arr.push(Math.random());
}
server.use(cookieSession({
    name: 'session_test',
    keys: arr,
    maxAge: 20 * 3600 * 1000
}));

//post数据
server.use(bodyParser.urlencoded({extended: false}));  //非扩展

//接收请求
server.use('/', function (req, res, next) {
    console.log(req.query, req.body, req.cookies, req.session);
});

//static数据
server.use(expressStatic('./www'));

