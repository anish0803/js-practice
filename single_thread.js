// --------single thread---------


console.log("hello");
function x (){
    console.log("hello2");
}
setTimeout(x,4000);
console.log("hello3");
console.log("hello4");