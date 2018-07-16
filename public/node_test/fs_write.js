const fs=require('public/node_test/fs_read');

fs.writeFile('file_write.txt','hello nodejs',function (err) {
    if (err) throw err;
    console.log('成功写入文件！！！')
})