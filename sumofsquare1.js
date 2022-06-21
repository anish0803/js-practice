// --------------sum of square using annonymous/iife/arrow function----------------------


// let ans =((num)=>{
//     let sum =0;
// while(num!=0){
//     let rem = num%10;
//     sum += rem ** 2;
//     num= Math.floor(num/10);
// }
// return sum;
// })(49);
// console.log(ans);







// ------------------sum of square using IIFE function------------

let ans=(function (num){
    let sum =0;
while(num!=0){
    let rem = num%10;
    sum += rem ** 2;
    num= Math.floor(num/10);
}
return sum;
})(49);
console.log(ans);