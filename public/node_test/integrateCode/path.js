const path = require('path');

var file_path = 'D:\\personSoftware\\第三次.txt';

console.log(path.parse(file_path));
//dir --文件部分
//base--文件名部分
//ext--扩展名部分
console.log(path.extname(file_path));