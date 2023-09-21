var userinput = prompt("Enter where do you live");

var firstChar = userinput.slice(0, 1).toUpperCase();

var RemainChar = userinput.slice(1).toLowerCase();

var combineInput = firstChar + RemainChar;

var CityArr = ["Karachi", "Islamabad", "Lahore", "Peshawar"];

for (var i = 0; i < CityArr.length; i++) {
  if (combineInput === CityArr[i]) {
    console.log("match");
  }
}

var str = "faraz";

var firstChar = str.slice(0, 1);

var remainChar = str.slice(1);

console.log(firstChar, remainChar);

var firstChar = str.slice(0, 1);

var remainChar = str.slice(1);

console.log(str.slice(0, 1));

var example = "this is an example";

var text = prompt("Enter some text");

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 2) === "  ") {
    alert("Double space found...");
  }
}

var str = "Muhammad";

str += " faraz";

console.log(str);

var text = "My name is Muhammad Faraz. I am a js developer";

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 5) === "Faraz") {
    text = text.slice(0, i) + "haseeb." + text.slice(i + 5);
  }
}

console.log(text);

var text =
  "The New Yorker magazine doesnt allow thephrase World War II. They say it shouldbe the So let search the following sentence for the banned characterand replace them with the phrase that the New Yorker prefers";

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, i) + "The Second World War" + text.slice(i + 12);
  }
}

console.log(text);

var text =
  "The New Yorker magazine doesnt allow thephrase World War II. They say it shouldbe the So let search the following sentence for the banned characterand replace them with the phrase that the New Yorker prefers";

var str = "My name is Muhammad Faraz. I am a js developer";
var result = str.indexOf("Faraz");

var indexValue = str.indexOf(0, result);
var replaceWord = "haseeb";
var remainwords = str.slice(result + 5);

console.log(indexValue + replaceWord + remainwords);
var text = "My name is Muhammad Faraz. I am a JS developer";
var firstChar = text.indexOf("Faraz");
console.log(firstChar);
if (firstChar !== -1) {
  text = text.slice(0, firstChar) + "HASEEB" + text.slice(firstChar + 5);
}

console.log(text);
var text = "My name is Muhammad Faraz. Faraz is a JS developer";
console.log(text.replaceAll("Faraz", "haseeb"));

var str = "Faraz Ahmed";

console.log(str.charAt(0).toLowerCase());

var num = 2.9;

console.log(Math.round(num));

console.log(Math.ceil(num));

console.log(Math.floor(num));

var randomNumber = Math.random() * 10;

console.log(randomNumber);

var headUser = prompt("Enter head username");

var tailUser = prompt("Enter tail username");

var toss = Math.random() * 2;

var floor = Math.floor(toss);

if (floor === 0) {
  alert(headUser + " win the toss");
} else {
  alert(tailUser + "win the toss");
}

var num1 = Number(prompt("Enter first value"));

var num2 = Number(prompt("Enter second value"));

var num1 = 20;
var num2 = 18;

var add = num1 + num2;
console.log(typeof add);
console.log(add.toString());

var randomNumber = Math.random() * 3;

console.log(randomNumber.toFixed(0));
