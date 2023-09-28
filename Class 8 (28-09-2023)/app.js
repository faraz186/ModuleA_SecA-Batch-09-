var headUser = prompt("Enter head username");

var tailUser = prompt("Enter tail username");

var toss = Math.random() * 2;

var floor = Math.floor(toss);

console.log(floor);

if (floor === 0) {
  alert(headUser + " win the toss");
} else {
  alert(tailUser + " win the toss");
}

var randomValues =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%**_()&";
var password = "";

console.log(randomValues.length);

for (var i = 0; i < 10; i++) {
  var randomNumber = Math.floor(Math.random() * randomValues.length);
  console.log(randomNumber, randomValues[randomNumber]);
  password += randomValues[randomNumber];
}

console.log(password);

var word = prompt("Enter a word");

var check = "";

for (var i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
  check += word[i];
}

if (word === check) {
  console.log(word + " is a palindrome word");
} else {
  console.log(word + " is not a palindrome word");
}

var todaydate = new Date();

console.log(todaydate.toString().slice(0, 10));

var dayNames = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];

console.log(dayNames[todaydate.getDay()], todaydate.getDate());

console.log(todaydate.getTime());

var date = new Date("1 jan 2003");

console.log(date.setFullYear(2030));

var ramadanDate = new Date("10 march 2024");

var ramadanDateMilli = ramadanDate.getTime();

var todaydate = new Date();

var todayDatemilli = todaydate.getTime();

var diff = ramadanDateMilli - todayDatemilli;

var months = diff / 2592000000;

var days = diff / console.log(Math.floor(months));
