var http = require('http');
var queryString = require('querystring');
var postDate = queryString.stringify({
    content: '大苏打',
    tid: '348'
});

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Length': postDate.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'IMCDNS=0; Hm_lvt_fb538fdd5bd62072b6a984ddbc658a16=1532399462; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1532399462; imooc_uuid=fa4a87e2-1e08-4f72-aec6-5fe93a5c28b2; imooc_isnew=1; imooc_isnew_ct=1532399321; PHPSESSID=68ef65f0jlkn3vfe2nbv3m0gs0; loginstate=1; apsid=I4MGRmMDI2Zjc4OThlOThiMzU3NDM4OWY0NDNhMjMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjYzNTI3MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYwZTg1YzNkMGYyOWRlMjMwMjZkY2RiYTk1NjBmODRiY49WW2OPVls%3DZm; Hm_lpvt_fb538fdd5bd62072b6a984ddbc658a16=1532402561; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1532402561; cvde=5b568ed9cb11d-42',
        'Host': 'www.imooc.com',
        'Origin': 'https://www.imooc.com',
        'Referer': 'https://www.imooc.com/qa/348/t/0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'

    }
};


var req = http.request(options, function (res) {
    console.log('status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));
    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    res.on('end', function () {
        console.log('评论完毕');
    });
});
req.on('error', function (e) {
    console.log('Error: ' + e.message);
});

req.write(postDate);
req.end();