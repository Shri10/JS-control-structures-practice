//-If-Else Problems:
{console.log("\tIf-Else Problems:");

console.log("\n\t1:\tWrite a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value");
let values = [];
for (let i = 0; i < 5; i++) {
  values.push(Math.floor(Math.random() * 900) + 100);
}
let minValue = Math.min(...values);
let maxValue = Math.max(...values);
console.log('Values: ' + values);
console.log('Minimum Value: ' + minValue);
console.log('Maximum Value: ' + maxValue);
//-=-=-=-

console.log("\n\t2:\tWrite a program that takes day and month and prints true if day of month is between March 20 and June 20.");
console.log("No option of Command line inputs.\tOur input -> day = 15 & month = 4");
//No option of Command line inputs
let day = 15;
let month = 4; // Month-April
let isBetweenMarch20AndJune20 = (month > 3 && month < 6) || (month === 3 && day >= 20) || (month === 6 && day <= 20);
console.log('Is between March 20 and June 20: ' + isBetweenMarch20AndJune20);
//-=-=-=-

console.log("\n\t3:\tWrite a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year.");
console.log("No option of Command line inputs.\tOur input -> year = 2000");
//No option of Command line inputs
let year = 2000;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(year + ' is a leap year: ' + isLeapYear);
//-=-=-=-

console.log("\n\t4:\tWrite a program to simulate a coin flip and print out \"Heads\" or \"Tails\" accordingly.");
let coinFlip = Math.floor(Math.random() * 2);
let result = coinFlip === 0 ? 'Heads' : 'Tails';
console.log('1st Coin Flip: ' + result);
coinFlip = Math.floor(Math.random() * 2);
result = coinFlip === 0 ? 'Heads' : 'Tails';
console.log('2nd Coin Flip: ' + result);
coinFlip = Math.floor(Math.random() * 2);
result = coinFlip === 0 ? 'Heads' : 'Tails';
console.log('3rd Coin Flip: ' + result);
coinFlip = Math.floor(Math.random() * 2);
result = coinFlip === 0 ? 'Heads' : 'Tails';
console.log('4th Coin Flip: ' + result);
//-=-=-=-
}