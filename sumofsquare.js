function sumofsquare (num){
    let sum =0;
while(num!=0){
    let rem = num%10;
    sum += rem ** 2;
    num= Math.floor(num/10);
}
return sum;
}
let ans = sumofsquare (49);

console.log(ans);