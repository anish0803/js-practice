let num = parseInt(process.argv[2]);
firstDigit = Math.floor(num / 100);
midDigit = Math.floor(num / 10) % 10;
lastDigit = num % 10;
sum = Math.pow(firstDigit, 3) + Math.pow(midDigit, 3) + Math.pow(lastDigit, 3);
if (sum == num) {
  console.log("It is a armstrong number");
} else {
  console.log("It is not a armstrong number");
}