const express = require('express');
const bodyParser = require('body-parser');

var server = express();
server.listen(8080);

server.use(bodyParser.urlencoded({
    extended: false,  //扩展模式
    limit: 2 * 1024 * 1024   //限制post传输数据的大小(2M)
}));

server.use('/', function (req, res) {
    console.log(req.body);
    res.end();
});