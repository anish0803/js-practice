// Take 3 numbers and find and return biggest of them. If all three numbers are same than print "None of them is biggest"

// if there are two numbers same as biggest than also print "None of them is biggest"




function biggest (a,b,c){
    let key = true;
    switch (key) {
      case a > b && a > c:
        return a;
      case b > a && b > c:
        return b;
      case c > a && c > b:
        return c;
      default:
        return 'None of them is biggest'
    }
  }
  console.log(biggest(40,50,30));
  exports.biggest = biggest