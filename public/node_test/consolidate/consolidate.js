const express = require('express');
const consolidate=require('consolidate');

var server = express();
server.listen(8080);

//整合模版引擎
/**
 * 配置模版引擎
 *  1.想要输出什么
 *  2.使用哪个模版引擎
 *  3.模版引擎文件存放的目录
 */
//1
server.set('view engine','html');
//2
server.engine('html',consolidate.ejs);
//3
server.set('views','./views');

//接收get请求
server.get('/index',function (req,res) {
    res.render('1.ejs',{name:'Jamie'});
});

