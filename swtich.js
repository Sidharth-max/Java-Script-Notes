//The switch statement in JavaScript is used to perform different actions based on different conditions
let day = 2;
switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}


// Switch with Multiple Cases
let fruit = "apple";
switch(fruit) {
  case "banana":
  case "apple":
    console.log("Fruit is either banana or apple");
    break;
  default:
    console.log("Unknown fruit");
}


// Switch Without break
let grade = "B";
switch(grade) {
  case "A":
    console.log("Excellent");
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Invalid grade");
}


//switch with default Only
let score = 85;
switch(true) {
  case (score >= 90):
    console.log("Grade A");
    break;
  case (score >= 75 && score < 90):
    console.log("Grade B");
    break;
  default:
    console.log("Grade C or below");
}
