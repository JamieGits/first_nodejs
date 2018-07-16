const express = require('express');
const expressStatic = require('express-static');

var server = express();
server.listen(8080);
var users = {
    'zhangsan': '12',
    'lisi': '13',
    'wangwu': '14'
};
server.get('/login', function (req, res) {
    console.log(req.query);
    var user = req.query['user'];
    var pass = req.query['pass'];
    //用户是否存在
    if (users[user] == null) {
        res.send({ok: false, "msg": "该用户不存在"});

    } else {
        //判断密码是否正确
        if (users[user] != pass) {
            res.send({ok: false, "msg": "用户密码输入错误"})
        } else {
            res.send({ok: true, "msg": "登录成功"})
        }
    }
});

server.use(expressStatic('./www'));