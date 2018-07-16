const express=require('express');
const cookieParser=require('cookie-parser');

var server=express();
server.listen(8080);

//cookie的中间件,解析cookie
server.use(cookieParser());
server.use('/',function (req,res) {
    res.clearCookie('user');
    res.send('ok');

});