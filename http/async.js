var a = 0;

function printIt() {
    console.log(a);
};

function plus(callback) {
    setTimeout(function () {
        a += 1;
        callback();
    }, 1000);
};

plus(printIt);