/*
var pet = {
    word: '....',
    speak: function () {
        console.log(this.word);
        console.log(this === pet);
    }
};
pet.speak();*/


/*function pet(words) {
   this.words=words;
   console.log(words);
   //this的上下文指的是global
   console.log(this===global);
}
pet('aaa');*/


function pet(words) {
    this.words=words;
    this.speak=function() {
        console.log(this.words);
        console.log(this);
        console.log(this===pet);
    }
}

var cat=new pet('Jamie');
cat.speak();







