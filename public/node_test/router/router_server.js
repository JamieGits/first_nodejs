const express = require('express');

var server = express();
server.listen(8080);


var routerUser = express.Router();
server.use('/user', routerUser);
routerUser.get('/user1.html', function (req, res) {
    res.send('user1');
});


var routerArticle = express.Router();
server.use('/article', routerArticle);
routerArticle.get('/article1.html', function (req, res) {
    res.send('article1');
});