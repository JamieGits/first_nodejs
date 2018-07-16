const expess = require('express');
const multer = require('multer');
const pathAddr = require('path');
const fs = require('fs');

var objMulter = multer({dest: './upload'});
var server = expess();


server.use(objMulter.any());
server.post('/', function (req, res) {
    // console.log(req.files);
    var newName = req.files[0].path + pathAddr.extname(req.files[0].originalname);
    fs.rename(req.files[0].path, newName, function (err) {
        if (err) {
            console.log('上传失败');
        } else {
            console.log('上传成功');
        }
    })
});

server.listen('8080');