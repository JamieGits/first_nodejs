const ejs = require('ejs');

ejs.renderFile('../../../views/3.ejs', {
    json: {
        arr: [
            {'user': 'jamie', 'pass': '123'},
            {'user': 'janey', 'pass': '321'},
            {'user': 'java', 'pass': '999'}
        ]
    }
}, function (err, data) {
    console.log(data)
});