var firebaseConfig = {
  apiKey: "***********************************",
  authDomain: "*************************************",
  databaseURL: "******************************************",
  projectId: "***************",
  storageBucket: "*********************",
  messagingSenderId: "*********************",
  appId: "*****************************************",
};

// Initialize Firebase

var app = firebase.initializeApp(firebaseConfig);

// console.log(app.database);

function getData() {
  var name = document.getElementById("name");
  var section = document.getElementById("section");

  //   console.log(name.value, section.value);

  var StdObj = {
    Stdname: name.value,
    Stdsection: section.value,
    // StdAddress: address.value,
  };

  console.log(StdObj);

  firebase.database().ref("studentData/student1").set(StdObj);
}

function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // IdP data available in result.additionalUserInfo.profile.
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

function loginWithGithub() {
  var provider = new firebase.auth.GithubAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = credential.accessToken;

      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // IdP data available in result.additionalUserInfo.profile.
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
