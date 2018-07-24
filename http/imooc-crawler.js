var http=require('http');
var url='http://linux.51yip.com/';
http.get(url,function (res) {
    var html='';
    res.on('data',function (data) {
        html+=data;
    });
    res.on('end',function () {
        console.log(1111111)
        console.log(html);
    });
}).on('error',function () {
    console.log('获取数据异常！');
});