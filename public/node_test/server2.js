const http=require('http');
const fs=require('fs');
var server=http.createServer((req,res)=>{
    var file_name='./www'+req.url;
    fs.readFile(file_name,(err,data)=>{
  /*      if(err) throw err;
        res.write(data);
        res.end();*/
  if(err){
      console.log(404);
  }else{
      res.write(data);
      res.end();
  }
    });
});
server.listen(8080);
