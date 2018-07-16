const express=require('express');
const cookieParser=require('cookie-parser');

var server=express();
server.listen(8080);

//cookie的中间件,解析cookie
server.use(cookieParser());
server.use('/',function (req,res) {
    res.cookie('user','Jamie');
    //获取cookie数据
    console.log(req.cookies);
    res.send('ok');

});