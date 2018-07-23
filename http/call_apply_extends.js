function Pet(words){
    this.words=words,
    this.speak=function () {
        console.log(this.words);
    }
}

//call和apply可以改变上下文执行对象，两者作用相同，仅仅是方法的第二个参数不同，call直接使用参数列表，
// apply使用参数数组，具体作用是调用一个对象的方法，以另一个对象替换当前对象，实际上是改变this指向的对象内容
function Dog(words) {
    Pet.call(this,words);
}

var dog=new Dog('wang');

dog.speak();