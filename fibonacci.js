let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);

 a=1;
 b=1;
 for(let i=1;i<=10;i++){
    console.log(a);
    let c= a+b;
    a=b;
    b=c
 }