function addtodo() {
  var input = document.getElementById("inputField");
  //   console.log(input.value);

  // ***************************Create list*********************************

  var liElement = document.createElement("li");

  var liText = document.createTextNode(input.value);

  liElement.appendChild(liText);

  // ***********************Delete button**********************************

  var delbtn = document.createElement("button");

  var delbtnText = document.createTextNode("Delete");

  delbtn.appendChild(delbtnText);

  delbtn.setAttribute("onclick", "deleteItem(this)");

  liElement.appendChild(delbtn);

  // ***********************Edit button**********************************

  var editbtn = document.createElement("button");

  var editbtnText = document.createTextNode("Edit");

  editbtn.appendChild(editbtnText);

  liElement.appendChild(editbtn);

  editbtn.setAttribute("onclick", "editItem(this)");

  var list = document.getElementById("list");

  list.appendChild(liElement);

  console.log(liElement);

  input.value = "";
}

function deleteAll() {
  var list = document.getElementById("list");
  list.innerHTML = "";
}

function deleteItem(x) {
  console.log(x.parentNode.remove());
}

function editItem(e) {
  var input = prompt("Enter updated value...");

  e.parentNode.firstChild.nodeValue = input;
}
