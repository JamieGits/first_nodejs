const http = require('http');
const queryString=require('querystring');
http.createServer(function (req, res) {
    var i = 0;
    var str = '';
    //有一段数据达到(要分很多次)
    req.on('data', function (data) {
        console.log('第${i++}次接受数据')
        str += data;
    });
    req.on('end', function () {
        console.log(str)
        var json = queryString.parse(str)
        console.log(json)
    });
}).listen('8080');