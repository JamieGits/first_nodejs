var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

//系统默认的最大监听事件不能超过默认值，需要自己设置最大事件数
life.setMaxListeners(11);

life.on('事件名', function (who) {
    console.log('给' + who + '倒水1');
});
life.on('事件名', function (who) {
    console.log('给' + who + '倒水2');
});
life.on('事件名', function (who) {
    console.log('给' + who + '倒水3');
});
life.on('事件名', function (who) {
    console.log('给' + who + '倒水4');
});
life.on('事件名', function (who) {
    console.log('给' + who + '倒水5');
});
life.on('事件名', function (who) {
    console.log('给' + who + '倒水6');
});
life.on('事件名', function (who) {
    console.log('给' + who + '倒水7');
});
life.on('事件名', function (who) {
    console.log('给' + who + '倒水8');
});
life.on('事件名', function (who) {
    console.log('给' + who + '倒水9');
});
life.on('事件名', function (who) {
    console.log('给' + who + '倒水10');
});


life.emit('事件名', '先生');