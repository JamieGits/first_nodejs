const http = require('http');
const urlLib = require('url');
const querystring = require('querystring');
const fs = require('fs');

http.createServer(function (req, res) {
    var obj = urlLib.parse(req.url, true);
    var url = obj.pathname;
    const query = obj.query;
    var str = '';
    req.on('data', function (data) {
        str += data;
    });
    req.on('end', function () {
        const post = querystring.parse(query);
        console.log(url, query, post);

        //文件请求
        var file_name = './www' + url;
        fs.readFile(file_name, function (err, data) {
            if (err) {
                res.write('404');
            } else {
                res.write(data);
            }
            res.end();
        });

    });

}).listen('8080');