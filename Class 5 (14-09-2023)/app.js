console.log(arr[1]);

var arr1 = new Array("abc", 100, true, "hamza");

console.log(arr1[2]);

var arr = [];

arr[0] = prompt("Enter first value");
arr[1] = prompt("Enter second value");
arr[2] = prompt("Enter third value");
arr[3] = prompt("Enter fourth value");
arr[4] = prompt("Enter fifth value");
arr[5] = prompt("Enter sixth value");

console.log(arr);

arr.pop();

arr.push(userInput, userInput1);

arr.shift();

var userInput = prompt("Enter first Value");

var userInput1 = prompt("Enter second Value");

arr.unshift(userInput, userInput1);

var targetValue = +prompt("Enter targetValue Value");

var deleteValue = +prompt("Enter deleteValue Value");

var addingElement = prompt("Enter addingElement Value");

var addingElement2 = prompt("Enter addingElement Value");

arr.splice(targetValue, deleteValue, addingElement, addingElement2);

var arr = ["dog", "cat", "lizard", "tiger", "lion"];

console.log("Original array: ", arr);

var startingValue = +prompt("Enter starting Value");

var EndingValue = +prompt("Enter Ending Value");

var copy = arr.slice(startingValue, EndingValue);

console.log("Updated Array: ", copy);

var arr = ["apple", "mango", "grapes", "banana", "orange"];

document.write(
  "<select>" +
    "<option>" +
    arr[0] +
    "</option>" +
    "<option>" +
    arr[1] +
    "</option>" +
    "<option>" +
    arr[2] +
    "</option>" +
    "<option>" +
    arr[3] +
    "</option>" +
    "<option>" +
    arr[4] +
    "</option>" +
    "</select>"
);

var message = "Welcome User";

console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);

for (var i = 1; i <= 10; i++) {
  console.log("welcome user", i);
}

var i = 2;

if (i === 2) {
  alert("true");
}

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

document.write(4 + "x" + 1 + "=" + 4 * 1 + "<br>");
document.write(4 + "x" + 2 + "=" + 4 * 2 + "<br>");
document.write(4 + "x" + 3 + "=" + 4 * 3 + "<br>");
document.write(4 + "x" + 4 + "=" + 4 * 4 + "<br>");
document.write(4 + "x" + 5 + "=" + 4 * 5 + "<br>");
document.write(4 + "x" + 6 + "=" + 4 * 6 + "<br>");
document.write(4 + "x" + 7 + "=" + 4 * 7 + "<br>");
document.write(4 + "x" + 8 + "=" + 4 * 8 + "<br>");
document.write(4 + "x" + 9 + "=" + 4 * 9 + "<br>");
document.write(4 + "x" + 10 + "=" + 4 * 10 + "<br>");

var userInput = +prompt("Enter a number to generate a multiplication table");
var userInputLength = +prompt("Enter length");

for (var i = 1; i <= userInputLength; i++) {
  document.write(userInput + "x" + i + "=" + userInput * i + "<br>");
}

var userCity = prompt("Where do you live??");

var arr = ["lahore", "islamabad", "karachi", "quetta", "peshawar"];

for (var i = 0; i <= arr.length; i++) {
  if (userCity === "karachi") {
    alert("it is a cleanest city..");
  }
}
