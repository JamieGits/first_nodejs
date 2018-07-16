const express=require('express');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');

var server=express();
server.listen(8080);
var arr=[];
for(var i=0;i<10000;i++){
    arr.push('sig_'+Math.random());
}
server.use(cookieParser());
server.use(cookieSession({
    keys:arr,
    maxAge:30*24*3600*1000,
    name:'ssss'

}));
server.use('/',function (req,res) {
    if(req.session['count']==null){
        req.session['count']=1;
    }else{
        req.session['count']++;
    }
    console.log(req.session['count']);
    res.send('ok');
});

