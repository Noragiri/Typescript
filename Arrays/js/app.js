"use strict";
let genericArray = [];
let arrayOfObjects = [];
let arrayOfStrings = new Array();
let arrayOfNumbers = Array();
let arrayOfArrays1 = [];
let arrayOfNumbersBrackets = [];
arrayOfNumbers.push(5, 2);
arrayOfNumbers.unshift(10, 40);
arrayOfNumbers.unshift(20);
arrayOfNumbers.forEach((number) => console.log(number));
console.log(arrayOfNumbers);
console.log(`${arrayOfNumbers}`);
let removedLastNumber = arrayOfNumbers.pop(); // remove last number
let removedFirstNumber = arrayOfNumbers.shift(); // remove first number
console.log(`First removed number:${removedFirstNumber}\nLast removed number:${removedLastNumber}`);
const processNumbers = (numbers) => {
    console.log("Processing numbers:", numbers);
    const filtered = numbers.filter((n) => n > 0);
    console.log("Filtered positive numbers:", filtered);
    const squared = filtered.map((n) => n * n);
    console.log("Squared numbers:", squared);
    const sum = squared.reduce((acc, val) => acc + val, 0);
    console.log("Sum of squares:", sum);
    return sum;
};
const processNumbersResult = processNumbers([-2, 3, 4, -1, 5]);
console.log("Final result:", processNumbersResult);
let originalArray = [3, 7, 2];
// let newArray = originalArray.concat();
// let newArray = originalArray.slice();
let newArray = [...originalArray];
newArray.push(100);
console.log(originalArray);
console.log(newArray);
let farmAnimals = [
    "cow",
    "horse",
    "pig",
    "chicken",
    "sheep",
    "goat",
    "lamb",
];
let iAmSorted = [...farmAnimals].sort();
let iAmReversed = [...farmAnimals].reverse();
console.log(farmAnimals);
console.log(iAmSorted);
console.log(iAmReversed);
let animals = [
    "cow",
    "horse",
    "pig",
    "chicken",
    "horse",
    "sheep",
    "horse",
    "goat",
    "lamb",
];
let result = animals.indexOf("horse");
let result2 = animals.lastIndexOf("horse");
console.log(`First index: ${result} and last is ${result2}`);
let myArray = ["I'm", "You're", "We're"];
let alteredArray = myArray.map((value) => value.concat(" (Not) Alone"));
let filteredArray = myArray.filter((m) => m.length > 3);
console.log(`${myArray}`);
console.log(`${alteredArray}`);
console.log(`${filteredArray}`);
//Looping
let loopingNumbers = [39, 42, 51, 62, 64, 754];
for (let i = 0; i < loopingNumbers.length; i++) {
    console.log(loopingNumbers[i]);
}
for (let n of loopingNumbers) {
    console.log(n);
}
for (let n in loopingNumbers) {
    console.log(n, loopingNumbers[n]);
}
