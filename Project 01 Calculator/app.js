function getValue(e) {
  var input = document.getElementById("inputField");
  input.value += e;
  //   console.log(e);
}

function clrAll() {
  var input = document.getElementById("inputField");
  input.value = "";
}

function deletechar() {
  var input = document.getElementById("inputField");
  input.value = input.value.slice(0, -3);
}

function equal() {
  try {
    var input = document.getElementById("inputField");
    input.value = eval(input.value);
  } catch {
    input.value = "error";
  }
}
