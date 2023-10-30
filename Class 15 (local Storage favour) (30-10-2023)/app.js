function getValue()
{
    var input = document.getElementById("name");
    var obj = {
        name:input.value
    }
    // **Convert object into String***

    localStorage.setItem("name",JSON.stringify(obj))

    var res = localStorage.getItem("name");

    // ***Convert string into object**
    var getvalue = JSON.parse(res)

    console.log(getvalue)
}





// var name = "faraz";

// var obj = {
//     name:name
// }

// localStorage.setItem("name",JSON.stringify(obj))

// var res=  localStorage.getItem("name")

// var data = JSON.parse(res);

// console.log(data)
// var obj = {
//     name:"faraz",
//     age:21
// }

// console.log(JSON.stringify(obj))

// console.log(obj)