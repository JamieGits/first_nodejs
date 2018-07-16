const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const urlLib = require('url');
var users = {};
var server = http.createServer(function (req, res) {
    //解析数据
    var str = '';
    req.on('data', function (err, data) {
        if (err) {
            console.log('404');
        } else {
            str += data;
            alert(str)
        }
    });
    req.on('end', function () {
        var obj = urlLib.parse(req.url, true);
        var url = obj.pathname;
        //接受get数据
        var GET = obj.query;
        //接受post数据
        var POST = queryString.parse(str);
        //区分请求是文件还是接口
        if (url == '/user') {
            console.log(users)
            switch (GET.act) {
                case 'reg':
                    //判断用户是否存在
                    if (users[GET.user]) {
                        res.write('{"ok":false,"msg":"用户已存在"}');
                        //插入注册用户
                    } else {
                        users[GET.user] = GET.pass;
                        res.write('{"ok":true,"msg":"注册成功"}');
                    }
                    break;
                case 'login':
                    //判断用户是否存在
                    if (users[GET.user] == null) {
                        res.write('{"ok":false,"msg":"用户不存在，请先注册"}');
                    } else {
                        //判断用户输入密码是否正确
                        if (users[GET.user] != GET.pass) {
                            res.write('{"ok":false,"msg":"用户密码输入有误"}');
                        } else {
                            res.write('{"ok":true,"msg":"用户登录成功"}');
                        }
                    }

                    break;
                default:
                    res.write('{"ok":false,"msg":"请求的act不存在"}');
            }
            res.end();
        } else {
            //读取文件
            var file_name = './www' + url;
            fs.readFile(file_name, function (err, data) {
                if (err) {
                    res.write('404');
                } else {
                    res.write(data);
                }
                res.end();
            });
        }

    });

});

server.listen(8080);