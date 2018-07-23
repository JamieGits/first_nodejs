var pet = {
    words: '...',
    speak: function (say) {
        console.log(say + ' ' + this.words);
    }
};

// pet.speak('cat');

var dog={
    words:'wang'
};
//将pet的上下文对象转换成dog
pet.speak.call(dog,'dog');