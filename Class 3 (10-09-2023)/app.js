// var firstname = prompt("enter first name");

// var lastname = prompt("enter last name");

// console.log(
//   "Hello Mr." + firstname + " " + lastname + "We hope you are fine.."
// );

// var num1 = parseInt(prompt("Enter first number"));

// var num2 = parseInt(prompt("Enter second number"));

// var add = num1 + num2;

// console.log("The addition of two number is: " + add);

// var age = "20";

// console.log(typeof age);

// var userAge = +prompt("Enter your age");

// if (userAge < 18) {
//   console.log("Ineligible ofr CNIC");
// } else {
//   console.log("eligible ofr CNIC");
// }

// var userCity = prompt("Where do you live");
// var score = 0;

// if (userCity === "karachi") {
//   console.log("It is one of the cleanest city..", ++score);
// }

// var num1 = "12";

// if (num1 === 12) {
//   console.log("match");
// }

// var RollNo = +prompt("Enter your Roll number");

// if (RollNo !== 123456) {
//   console.log("Please enter");
// } else {
//   console.log("No entry..");
// }

// var userCity = prompt("where do you live!!");

// if (userCity === "karachi") {
//   console.log("Welocme ot karachi..");
// } else if (userCity === "lahore") {
//   console.log("Welocme to lahore..");
// } else if (userCity === "quetta") {
//   console.log("Welcome to Quetta..");
// } else {
//   console.log("have a nice day..");
// }

// var gender = prompt("Enter your gender");
// var message;

// if (gender === "male") {
//     message = "Hello Sir..";
// } else if (gender === "female") {
//     message = "hello sister..";
// } else {
//     message = "okk..";
// }

// alert(message)

// var firstSubject = +prompt("Enter first Subject marks");
// var SecondSubject = +prompt("Enter Second Subject marks");
// var ThirdSubject = +prompt("Enter third Subject marks");
// var totalMarks = +prompt("Enter total subject marks");
// var obtMarks = firstSubject + SecondSubject + ThirdSubject;
// var percentage = (obtMarks / totalMarks) * 100;

// var percentage = +prompt("Enter your percentage");

// if (percentage >= 80 && percentage <= 100) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "A+");
// } else if (percentage >= 70 && percentage <= 80) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "A");
// } else if (percentage >= 60 && percentage <= 70) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "B");
// } else if (percentage >= 50 && percentage <= 60) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "C");
// } else if (percentage >= 40 && percentage <= 50) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "D");
// } else if (percentage >= 33 && percentage <= 40) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "E");
// } else if (percentage >= 0 && percentage <= 33) {
//   document.write("Percentage:" + percentage + "<br>" + "Grade: " + "F");
// } else {
//   console.log("Please enter correct percentage...");
// }

// var userWeight = +prompt("Enter your weight");
// var userAge = +prompt("Enter your age");
// var userGender = prompt("Enter your gender");

// if ((userWeight >= 70 && userAge >= 20) || userGender === "male") {
//   console.log("come to try out..");
// } else {
//   console.log("no entry");
// }

var number = +prompt("Enter your number");

if (number % 2 === 0) {
  console.log("even number");
} else if (number % 3 === 0) {
  console.log("odd number");
} else {
  console.log("neither ever nor odd number..");
}
