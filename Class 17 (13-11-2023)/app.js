var firebaseConfig = {
  apiKey: "*********************************************",
  authDomain: "*****************************",
  databaseURL: "***********************************************",
  projectId: "********************",
  storageBucket: "********************************",
  messagingSenderId: "***************",
  appId: "***********************************************",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

// console.log(app.database);

function getValues() {
  var name = document.getElementById("name");
  var section = document.getElementById("section");
  var email = document.getElementById("email");

  var detailsObj = {
    name: name.value,
    section: section.value,
    email: email.value,
  };

  var key = Math.random() * 325136136;

  firebase
    .database()
    .ref("faraz/users/" + Math.round(key))
    .set(detailsObj);
}

// **********************Get data form firebase using method once********************

function getDataFromFirebase() {
  firebase
    .database()
    .ref("faraz/users")
    .once("value", function (data) {
      console.log(data.val());
    });
}

getDataFromFirebase();

// **********************Get data form firebase using method on********************

function getDataFromFirebase() {
  firebase
    .database()
    .ref("faraz/users")
    .on("child_added", function (data) {
      console.log(data.val());
    });
}
getDataFromFirebase();

// **********************data remove from firebase database********************

function removeDataFromFirebaseDatabase() {
  firebase.database().ref("faraz/users/181649322").remove();
}

removeDataFromFirebaseDatabase();

// **********************Get data form firebase using edit method ********************

function editDataFromFirebaseDatabase() {
  firebase.database().ref("faraz/users/208048114").set({
    email: "arsalan@gmail.com",
    name: "arsalan",
  });
}

editDataFromFirebaseDatabase();
