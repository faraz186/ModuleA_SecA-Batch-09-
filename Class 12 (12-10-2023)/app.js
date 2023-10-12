// // *******************************DOM***************************************

// // console.log(document.childNodes[1].childNodes[2].childNodes[2].nodeName);

// var div = document.getElementById("main");

// var para2 = document.getElementsByClassName("para2");

// console.log(para2.setAttribute("id", "xyz"));

// // console.log(div.attributes[0].nodeValue);

// // console.log(div.hasAttribute("class"));

// // console.log(div.getAttribute("id"));

// // console.log(div.setAttribute("class", "abc"));

// // console.log(div.setAttribute("class", "abc"));

// // var para = document.getElementById("para2");

// // console.log(para.previousSibling);

// // console.log(para.nextSibling);

// // console.log(div.lastChild);

// // console.log(div.firstChild);

// var paraElement = document.createElement("p");

// var paraText = document.createTextNode("Welcome to the real DOM..");

// console.log(paraElement.appendChild(paraText));

// console.log(paraText);

// console.log(paraElement);

// div.appendChild(paraElement);

// var headingElement = document.createElement("h1");

// var headingText = document.createTextNode("hello world");

//  headingElement.appendChild(headingText);

// console.log(combine);

// console.log(headingElement);

// console.log(headingText);

// var div = document.getElementById("main");

// div.appendChild(combine);

var anchor = document.createElement("a");

var anchorText = document.createTextNode("google");

anchor.appendChild(anchorText);

console.log(anchor);

anchor.setAttribute("href", "https://www.google.com");
var div = document.getElementById("main");

div.appendChild(anchor);

function timer() {
  console.log("welcome..");
}

// setInterval(timer, 10);

setTimeout(timer, 3000);
