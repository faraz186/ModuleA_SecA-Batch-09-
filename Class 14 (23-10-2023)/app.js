// var arr = [1, 2, 3, 4, 5, { name: "faraz" }, 7, 8, 9, 10];

// console.log(arr[5].name);

// var obj = {
//   name: "faraz",
//   age: 21,
//   address: {
//     street: "A",
//     city: "karachi",
//     country: "pakistan",
//     PostalCode: 123456,
//     coOrdinates: {
//       longitude: 16516516,
//       latitude: 4541651,
//     },
//   },
// };

// for (var outerKeys in obj) {
//   //   console.log(outerKeys, obj[outerKeys])
//   for (var AddressKeys in obj[outerKeys]) {
//     // console.log(AddressKeys, obj[outerKeys][AddressKeys]);
//     for (var cooKeys in obj[outerKeys][AddressKeys]) {
//       console.log(obj[outerKeys][AddressKeys][cooKeys]);
//     }
//   }
// }

// console.log(obj["name"]);
// var user = "address";

// console.log(obj[user]);

// for (var keys in obj) {
// //   console.log(keys);
// for(var innerKeys in obj)
// }

// obj.address.city = "lahore";

// console.log(obj.address.coOrdinates.latitude);
// console.log(obj);

// obj.courses = ["html", "css", "js"];

// obj.courses.push("react native");

// console.log(obj);

// function abc() {
//   console.log(20);
// }

// abc();

// var func = function () {
//   console.log(20);
// };

// func();

// var data = {
//   users: {
//     user1: {
//       name: "faraz",
//       age: 21,
//       email: "faraz@gmail.com",
//     },
//     user2: {
//       name: "hamza",
//       age: 20,
//       email: "hamza@gmail.com",
//     },
//     user3: {
//       name: "Saqib",
//       age: 25,
//       email: "Saqib@gmail.com",
//     },
//   },
//   users2: {
//     user4: {
//       name: "arsalan",
//       age: 26,
//       email: "arsalan@gmail.com",
//     },
//   },
// };

// for (var keys in data) {
//   console.log(keys);
//   for (var innerkeys in data[keys]) {
//     console.log(innerkeys);
//     for (var innerInnerKeys in data[keys][innerkeys]) {
//       console.log(innerInnerKeys, data[keys][innerkeys][innerInnerKeys]);
//     }
//   }
// }

function Student(name, age, email, address) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.address = address;
}

var student1 = new Student("Faraz", 21, "faraz@gmail.com", "karachi");
var student2 = new Student("Ahsan", 20, "Ahsan@gmail.com", "lahore");

console.log(student1);
console.log(student2);
