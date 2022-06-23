// let a = parseInt(process.argv[2]);


// let fact=1;
// for(i=a;i>0;i--){
//  fact=fact*i;
// }
// console.log(fact);




// using function of factorial program

function fact (num){
    fact = 1;
    for(let i =num;i>0;i--){
        fact *= i; 
}
return fact;

}
console.log(fact(5));



