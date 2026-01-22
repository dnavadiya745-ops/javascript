// Control Flow Statement  in JavaScript

// IF - Else Statemnet (if, if else, if else-if else)
// If (Condition) {}  -- > condition true hoy to {} code run
if (12 < 13) {
   console.log(true);
}

if (15 < 13) {
   console.log(true); // condition is false that why if satatemnet not run
}

if (!12) {
   console.log("number");
}

if (!0) {
   console.log("number");
}

// if -else statement
if (12 < 13) {
   console.log(true);
}
else {
   console.log(false);
}


if (15 < 13) {
   console.log(true); // condition is false that why if satatemnet not run
}
else {
   console.log(false); // if if statement condition is false that run this
}


if (!12) {
   console.log("number");
}
else {
   console.log("Not A Number");
}

let loggedin = false;
let admin = false;
if (loggedin && admin) {
   console.log("welcome admin");
}
else if (loggedin) {
   console.log("welcome user");
} else {
   console.log("go to login page");
}

// Switch Case Statement
switch ("BOGO") // value --> case value sathe match karshe ane code run thase
{
   case "First50":
      console.log("50% off on first order");
      break;

   case "BOGO":
      console.log("Buy One Get One");
      break;

   case "BlackFriday":
      console.log("It's Black Friday Sale - Get At RS. 50");
      break;
   default:
      console.log("Offer Not Valid")
}

switch ("Yellow") // value --> case value sathe match karshe ane code run thase
{
   case "Red":
      console.log("Stop");
      break;

   case "Yellow":
      console.log("Ready");
      break;

   case "Green":
      console.log("Go");
      break;
   default:
      console.log("Offer Not Valid")
}

// Early Return Pattern
function score(value) {
   if (value > 90) {
      return "Value is more than 90";
   } else if (value < 80) {
      return "value is less than 80";
   } else if (value < 70) {
      return "value is less than 70";
   } else if (value < 60) {
      return "value is less than 60";
   } else {
      return "value is less than 60";
   }
}
score(100);
// console.log(score(100))

function score1(value) {
   if (value < 90) return "value is less than 90";
   else if (value < 80) return "value is less than 80";
   else if (value < 70) return "value is less than 70";
   else if (value < 60) return "value is less than 60";
   else return "value is less than 60";
}

function score2(value) {
   if (value < 60) return "value is less than 60";
   else if (value < 70) return "value is less than 70";
   else if (value < 80) return "value is less than 80";
   else if (value < 90) return "value is less than 90";
   else return "value is more than 90";
}

// let x = 2;
// switch (x) {
//    case 2:
//       console.log("Two");
//    case 3:
//       console.log("Three");
// }

// Write a function getGrade(score) that:
// Takes A student's score as input (0 to 100)
// Returns the grade based on below logic:
// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 Fail
// Anything Else Invalid Marks

// switch ("90-100") {
//    case "90-100":
//       console.log("Grade : A+");
//       break;

//    case "80-89":
//       console.log("Grade : A");
//       break;

//    case "70-79":
//       console.log("Grade : B");
//       break;

//    case "60-69":
//       console.log("Grade : C");
//       break;

//    case "33-59":
//       console.log("Grade : D");
//       break;

//    case "0-32 ":
//       console.log("Fail");
//       break;

//    default:
//       console.log("Anything Else Invalid Marks")
// }  

function score(value) {
   if (value >= 90 && value <= 100) {
      return "A";
   } else if (value >= 80 && value <= 90) {
      return "B";
   } else if (value >= 70 && value <= 80) {
      return "C";
   } else if (value >= 60 && value <= 70) {
      return "D";
   }  else if (value >= 33 && value <= 60) {
      return "E";
   } else if (value >= 0 && value <= 33) {
      return "Fail";
   }  
   else {
      return "Anything Else Invalid Marks";
   }
}

function rps1(user, computer) {
   if(user === computer ) return "It's a Tie!!";
    else if(
      (user === "rock" && computer === "scissor")  ||
      (user === "paper" && computer === "rock")  ||
      (user === "scissor" && computer === "paper")  
    ) return "User Wins!!"
     else return "Computer Wins!!"
}
