var arr = ["faraz", "arsalan", "mustufa", "haseeb", "rabi", "shahid", "ali"];

console.log(arr);

console.log(typeof arr);

document.write("thisfsakjf");

var student1 = {
  name: "hamza",
  age: 21,
  email: "faraz@gmail.com",
  address: "karachi",
  getName: function () {
    return this.name;
  },
};

delete student1.getName;

console.log(age in student1);

console.log(student1.getName());

student1.courses = ["html", "css", "js"];

student1.courses[2] = "react js";
student1.courses.push("reactjs");

console.log(student1);

student1.courses = ["html5", "css3", "js"];

console.log(student1.courses[2]);

var student2 = {
  name: "faraz",
  age: 21,
  email: "faraz@gmail.com",
  address: "karachi",
};
console.log(student1.name, student1.email);
console.log(student1.email);
