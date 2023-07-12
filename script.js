//-If-Else Problems:
{console.log("\tIf-Else Problems:");

console.log("\n\t1:\tWrite a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value");
let values = [];
for (let i = 0; i < 5; i++) {
  values.push(Math.floor(Math.random() * 900) + 100);
}
let minValue = Math.min(...values);
let maxValue = Math.max(...values);
console.log('Values: ' , values);
console.log('Minimum Value: ' , minValue);
console.log('Maximum Value: ' , maxValue);
//-=-=-=-

console.log("\n\t2:\tWrite a program that takes day and month and prints true if day of month is between March 20 and June 20.");
console.log("No option of Command line inputs.\tOur input -> day = 15 & month = 4");
//No option of Command line inputs
let day = 15;
let month = 4; // Month-April
let isBetweenMarch20AndJune20 = (month > 3 && month < 6) || (month === 3 && day >= 20) || (month === 6 && day <= 20);
console.log('Is between March 20 and June 20: ' , isBetweenMarch20AndJune20);
//-=-=-=-

console.log("\n\t3:\tWrite a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year.");
console.log("No option of Command line inputs.\tOur input -> year = 2000");
//No option of Command line inputs
let year = 2000;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(year , ' is a leap year: ' , isLeapYear);
//-=-=-=-

console.log("\n\t4:\tWrite a program to simulate a coin flip and print out \"Heads\" or \"Tails\" accordingly.");
let coinFlip = Math.floor(Math.random() * 2);
let result = coinFlip === 0 ? 'Heads' : 'Tails';
console.log('1st Coin Flip: ' , result);
coinFlip = Math.floor(Math.random() * 2);
result = coinFlip === 0 ? 'Heads' : 'Tails';
console.log('2nd Coin Flip: ' , result);
coinFlip = Math.floor(Math.random() * 2);
result = coinFlip === 0 ? 'Heads' : 'Tails';
console.log('3rd Coin Flip: ' , result);
coinFlip = Math.floor(Math.random() * 2);
result = coinFlip === 0 ? 'Heads' : 'Tails';
console.log('4th Coin Flip: ' , result);
//-=-=-=-
}

//-If-Else-If Problems:
{console.log("\n\n\tIf-Else-If Problems:");

function getRandomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("\n\t1:\tRead a single digit number and write the number in word.");
let number = getRandomNumber(0, 9);
let word;

if (number == "0") word = "Zero";
else if (number == "1") word = "One";
else if (number == "2") word = "Two";
else if (number == "3") word = "Three";
else if (number == "4") word = "Four";
else if (number == "5") word = "Five";
else if (number == "6") word = "Six";
else if (number == "7") word = "Seven";
else if (number == "8") word = "Eight";
else if (number == "9") word = "Nine";
else word = "Invalid Input!";

console.log("Number is: " , number , " So the number in text is: " , word);
// console.log(word);
//-=-=-=-

console.log("\n\t2:\tRead a Number and Display the week day (Sunday, Monday,...) -> 1 is Sunday");
let dayNumber = getRandomNumber(1, 7);
let day;

if (dayNumber == "1") day = "Sunday";
else if (dayNumber == "2") day = "Monday";
else if (dayNumber == "3") day = "Tuesday";
else if (dayNumber == "4") day = "Wednesday";
else if (dayNumber == "5") day = "Thursday";
else if (dayNumber == "6") day = "Friday";
else if (dayNumber == "7") day = "Saturday";
else day = "Invalid Input!";

console.log("Day-Number is: " , dayNumber , " So the dayNumber in text is: " , day);
// console.log(day);
//-=-=-=-

console.log("\n\t3:\tRead a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...");
let numbersArray = [1, 10, 100, 1000];
let index = getRandomNumber(0, numbersArray.length-1);
/*let*/ number = numbersArray[index];
/*let*/ word;

if (number == "1") word = "Unit";
else if (number == "10") word = "Ten";
else if (number == "100") word = "Hundred";
else if (number == "1000") word = "Thousand";
else word = "Invalid Input!";

console.log("Number is: " , number , " So the number in text is: " , word);
//-=-=-=-

console.log("\n\t4:\tEnter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum");
let a = getRandomNumber(1, 100);
let b = getRandomNumber(1, 100);
let c = getRandomNumber(1, 100);

//    - 1.-> a + b * c
console.log("\n   - 1.-> a + b * c")
let result1 = a + b * c;
console.log(result1);

//    - 2.-> a % b + c
console.log("\n   - 2.-> a % b + c")
let result2 = a % b + c;
console.log(result2);

//    - 3.-> c + a / b
console.log("\n   - 3.-> c + a / b")
let result3 = c + a / b;
console.log(result3);

//    - 4.-> a * b + c
console.log("\n   - 4.-> a * b + c")
let result4 = a * b + c;
console.log(result4);

let maxResult = result1;
if (result2 > maxResult) maxResult = result2;
if (result3 > maxResult) maxResult = result3;
if (result4 > maxResult) maxResult = result4;

let minResult = result1;
if (result2 < minResult) minResult = result2;
if (result3 < minResult) minResult = result3;
if (result4 < minResult) minResult = result4;

console.log("\nMax Result: ", maxResult);
console.log("Min Result: ", minResult);
//-=-=-=-

}

//-Switch-Case Problems:
{console.log("\n\n\tSwitch-Case Problems:");

function getRandomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("\n\t1:\tRead a single digit number and write the number in word.");
/*let*/ number = getRandomNumber(0, 9);
/*let word;*/

switch(number) {
    case 0:
        word = "Zero";
        break;
    case 1:
        word = "One";
        break;
    case 2:
        word = "Two";
        break;
    case 3:
        word = "Three";
        break;
    case 4:
        word = "Four";
        break;
    case 5:
        word = "Five";
        break;
    case 6:
        word = "Six";
        break;
    case 7:
        word = "Seven";
        break;
    case 8:
        word = "Eight";
        break;
    case 9:
        word = "Nine";
        break;
    default:
        word = "Invalid Input!";
}

console.log("Number is: " , number , " So the number in text is: " , word);
//-=-=-=-

console.log("\n\t2:\tRead a Number and Display the week day (Sunday, Monday,...) -> 1 is Sunday");
let dayNumber = getRandomNumber(1, 7);
let day;

switch(dayNumber) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Invalid Input!";
}

console.log("Day-Number is: " , dayNumber , " So the dayNumber in text is: " , day);
//-=-=-=-

console.log("\n\t3:\tRead a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...");
let numbersArray = [1, 10, 100, 1000];
let index = getRandomNumber(0, numbersArray.length-1);
/*let*/ number = numbersArray[index];
/*let*/ word;

switch(number) {
    case 1:
        word = "Unit";
        break;
    case 10:
        word = "Ten";
        break;
    case 100:
        word = "Hundred";
        break;
    case 1000:
        word = "Thousand";
        break;
    default:
        word = "Invalid Input!";
}

console.log("Number is: " , number , " So the number in text is: " , word);
//-=-=-=-

console.log("\n\t4:\tUnit Conversion of different Length units");
let feet = getRandomNumber(1, 100);
let inch = getRandomNumber(1, 100);
let meter = getRandomNumber(1, 100);

// console.log(`Converting ${feet} ft, ${inch} in, and ${meter} m`);

// Feet to Inch
let feetToInch = feet * 12;
console.log("Converting ", feet ," Feet to Inch:\t", feetToInch , " in");

// Feet to Meter 
let feetToMeter = feet * 0.3048;
console.log("Converting ", feet ," Feet to Meter:\t", feetToMeter , " m");

// Inch to Feet
let inchToFeet = inch / 12;
console.log("Converting ", inch ," Inch to Feet:\t", inchToFeet , " ft");

// Meter to Feet
let meterToFeet = meter / 0.3048;
console.log("Converting ", meter ," Meter to Feet:\t", meterToFeet , " ft");
//-=-=-=-
}

