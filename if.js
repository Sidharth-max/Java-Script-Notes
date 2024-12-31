// Check if a number is positive, negative, or zero
let number = 5;
if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// Check if a number is even or odd
let n = 7;
if (n % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


//. Check if a person is eligible to vote
let age = 20;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


// Find the largest of two numbers
let a = 10, b = 15;
if (a > b) {
    console.log("a is greater");
} else {
    console.log("b is greater");
}

//Check if a character is a vowel or consonant
let char = 'e';
if ("aeiou".includes(char)) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

//Check if a year is a leap year
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}


// Check if a number is divisible by both 3 and 5
let num = 15;
if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both 3 and 5");
}


//. Check the grade based on marks
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Fail");
}


