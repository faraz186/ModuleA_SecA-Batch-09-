// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var res = arr.slice(0, 5);

// console.log(res);

// function abc(a, b) {
//   return a + b;
// }

// console.log(abc(10, 20))

// function abc() {
//   var a = "world";
// }
// console.log(a);

// abc();

// var user = prompt("Enter your name");
// switch (user) {
//   case "faraz":
//     alert("hello faraz..");
//     break;
//   case "arsalan":
//     alert("hello arsalan");
//     break;
//   case "haseeb":
//     alert("hello haseeb");
//     break;
//   case "rabi":
//     alert("hello rabi");
//     break;
//   default:
//     alert("sorry...");
// }

// for(var i = 0;i<=1;i++){

// }

// var i = 0;
// while (i <= 9) {
//   console.log(i);
//   i++;
// }

/* var i = 0; 
do {
  console.log(i);
  i++;
} while (i < 0);
*/

// alert("hello world")

// function greet(a) {
//   console.log(a);
//   a.style.backgroundColor = "red";
//   a.style.color = "white";
// }

// greet();

function get() {
  var user = document.getElementById("userinput");
  var user1 = document.getElementById("userinput1");
  var user2 = document.getElementById("userinput2");

  if (user.value && user1.value && user2.value) {
    alert("submitted");
  } else {
    alert("please enter your entire field..");
  }
}
