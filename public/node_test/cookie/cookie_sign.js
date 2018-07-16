const express=require('express');
const cookieParser=require('cookie-parser');

var server=express();
server.listen(8080);

//cookie的中间件,解析签名cookie
server.use(cookieParser('kdjsskjjskdjks'));
server.use('/',function (req,res) {
    //秘钥
    req.secret='kdjsskjjskdjks';
    //通过秘钥对cookie数据进行签名
    res.cookie('user','Janey',{signed:true});
    //获取cookie数据
    console.log('有签名cookie:',req.signedCookies);
    console.log('无签名cookie:',req.cookies);
    res.send('ok');

});