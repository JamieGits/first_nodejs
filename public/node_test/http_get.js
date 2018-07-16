const http = require('http');
const urlLib = require('url');
var server = http.createServer(function (req, res) {
    var obj = urlLib.parse(req.url, true);
    var pathname = obj.pathname;
    var GET = obj.query;
    console.log(pathname, GET);
    res.write('abc');
    res.end();
});

server.listen(8080);