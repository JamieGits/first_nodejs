const express = require('express');

var server = express();
server.listen(8081);

server.use('/aaa/1.html', function (req, res) {

    res.cookie('user','blue',{path:'/aaa',maxAge:10*24*3600*1000});
    res.send('ok');
});