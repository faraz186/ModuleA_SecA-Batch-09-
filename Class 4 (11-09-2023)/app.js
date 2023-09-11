var num1 = Number(prompt());

var num2 = Number(prompt());

var add = num1 + num2;

console.log(add);

var firstName = prompt();

var lastName = prompt();

var fullName = firstName + " " + lastName;

document.write(
  "<center>" + "Hello Mr." + fullName + " hope you are fine.." + "</center>"
);

if (false) {
  console.log("match");
}
console.log(userAge);

var userAge = +prompt("enter your age");

if (userAge == 18) {
  console.log("you are eligible for CNIC");
} else {
  console.log("you are not eligible for CNIC");
}

var age = +prompt("Enter your age");

if (age <= 18) {
  console.log("you are eligible");
}

var ticketNumber = +prompt("Enter your ticket Number");

if (ticketNumber !== 410251) {
  console.log("please enter..");
} else {
  console.log("sorry no entry..");
}

var username = prompt("Enter your username");

if (username) {
  console.log("welocme user", username);
} else {
  alert("please enter your field");
}

var num1 = +prompt("enter first value");
var operator = prompt("enter your operator");
var num2 = +prompt("Enter second value");

if (operator === "+") {
  alert(num1 + num2);
} else if (operator === "-") {
  alert(num1 - num2);
} else if (operator === "*") {
  alert(num1 * num2);
} else if (operator === "/") {
  alert(num1 / num2);
}

var userWeight = +prompt("Enter your weight");
var userAge = +prompt("Enter your age");
var userGender = prompt("Enter your gender");
if (userGender === "male" || (userAge >= 20 && userWeight >= 75)) {
  console.log("come to try out..");
} else {
  console.log("sorry..");
}

var lang = prompt("Enter your language");
if (lang === "javascript") {
  var userPlace = prompt("Enter your location");
  if (userPlace === "karachi") {
    var exp = prompt("Enter your experience");
    if (exp === "2 years") {
      console.log("CONGRATULATIONS YOU HIRED!!");
    } else {
      console.log("bharhe ho ke aoo..");
    }
  } else {
    console.log("foran karachi ajao..");
  }
} else {
  console.log("javascript ja ke seekho..");
}

// ***********************************Arrays*************************************************

// var city0 = "karachi";
// var city1 = "lahore";
// var city2 = "lahore";
// var city3 = "lahore";
// var city4 = "lahore";

console.log(multipleValues.length);
console.log("Welcome to " + multipleValues[0]);
console.log(multipleValues[2]);
console.log(multipleValues[3]);
console.log(multipleValues[4]);

multipleValues.pop();

multipleValues.push("abc", 100);

console.log(multipleValues);

var userInput = prompt("Enter your name");
var arr = [];

arr.push(userInput);

console.log(arr);

var multipleValues = ["karachi", 12, "quetta", false, "hyderabad"];

multipleValues.shift();

multipleValues.unshift("lahore");

multipleValues.splice(3, 1, true);

var copyArr = multipleValues.slice(2, 3);

console.log(copyArr);
console.log(multipleValues);
