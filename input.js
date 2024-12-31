//how to take input from user we can take by prompt

// Grade Checker
let score = parseInt(prompt("Enter your score (0-100):"));

if (score >= 0 && score <= 100) {
    if (score >= 90) {
        alert("Grade: A");
    } else if (score >= 80) {
        alert("Grade: B");
    } else if (score >= 70) {
        alert("Grade: C");
    } else if (score >= 60) {
        alert("Grade: D");
    } else {
        alert("Grade: F");
    }
} else {
    alert("Invalid score. Please enter a number between 0 and 100.");
}

//Odd or Even with Range Check
let num = parseInt(prompt("Enter a number between 1 and 100:"));

if (num >= 1 && num <= 100) {
    if (num % 2 === 0) {
        alert("The number is even.");
    } else {
        alert("The number is odd.");
    }
} else {
    alert("Number out of range! Please enter a number between 1 and 100.");
}

//Check Voting Eligibility
let age = parseInt(prompt("Enter your age:"));

if (age >= 0) {
    if (age >= 18) {
        alert("You are eligible to vote.");
    } else {
        alert("You are not eligible to vote. Wait until you're 18.");
    }
} else {
    alert("Invalid age. Please enter a positive number.");
}

// Day Checker
let day = prompt("Enter a day of the week (e.g., Monday):").toLowerCase();

if (day) {
    if (day === "saturday" || day === "sunday") {
        alert("It's a weekend!");
    } else if (
        day === "monday" || 
        day === "tuesday" || 
        day === "wednesday" || 
        day === "thursday" || 
        day === "friday"
    ) {
        alert("It's a weekday.");
    } else {
        alert("Invalid day entered.");
    }
} else {
    alert("Input cannot be empty.");
}

//Number Sign Checker
let number = parseInt(prompt("Enter a number:"));

if (!isNaN(number)) {
    if (number > 0) {
        alert("The number is positive.");
    } else if (number < 0) {
        alert("The number is negative.");
    } else {
        alert("The number is zero.");
    }
} else {
    alert("Invalid input. Please enter a number.");
}


