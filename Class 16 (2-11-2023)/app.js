
const firebaseConfig = {
  apiKey: "****************************************",
  authDomain: "**********************",
  projectId: "****************************",
  storageBucket: "*************************************",
  messagingSenderId: "*******************",
  appId: "******************************************"
};

var firebase = firebase.initializeApp(firebaseConfig);

function getValue()
{
    var emai = document.getElementById("email");
    var pass = document.getElementById("password");
    
    firebase.auth().createUserWithEmailAndPassword(emai.value, pass.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    window.location.href  = 'dashboard.html'
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
console.log(errorMessage)
  });
}

var obj = {
    name:"haseeb",
    age:20,
    city:"karachi"
}

var str = JSON.stringify(obj);

console.log(str)

var returnObj = JSON.parse(str);

console.log(returnObj)

function getName(){
    var input = document.getElementById("name");

    var getStorageValue = localStorage.getItem("name");

    var OriginalValue = JSON.parse(getStorageValue);

    console.log(OriginalValue);

    if(!OriginalValue){
        OriginalValue = []
    }

    var UserObj = {
        name:input.value
    }

    OriginalValue.push(UserObj)
    
    localStorage.setItem("name",JSON.stringify(OriginalValue));
}
