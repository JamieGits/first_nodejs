const express = require('express');
const bodyParser = require('body-parser');
const queryString = require('querystring');
//链式操作，可以传递数据
var server = express();
server.listen(8080);

/*server.use(function (req, res, next) {
    var str = '';
    server.on('data', function (data) {
        str += data;
    });
    server.on('end', function () {
        req.body = queryString.parse(str);
        next();
    });
});*/

server.use(bodyParser.urlencoded({}));
server.use('/', function (req, res) {
    console.log(req.body);
});