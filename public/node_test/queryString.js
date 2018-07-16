const query = require('querystring');
//通过querystring可以将数据转换成json格式
var str = 'user=Jamie&pass=123&sex=男&age=22';
var json = query.parse(str);
console.log(json);