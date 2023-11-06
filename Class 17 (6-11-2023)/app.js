var firebaseConfig = {
  apiKey: "*********************************************",
  authDomain: "*******************************",
  projectId: "****************",
  storageBucket: "***************************",
  messagingSenderId: "*************",
  appId: "**********************************************",
};

// Initialize Firebase

var app = firebase.initializeApp(firebaseConfig);

// console.log(app);

// ***********************SignUp Auth*******************************

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          alert("Email sent Successfully..");
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

// ***********************Login Auth*******************************

function login() {
  var email = document.getElementById("Useremail");
  var password = document.getElementById("Userpassword");

  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

// ***********************Forget Password section*******************************

function forgotPassword() {
  var email = document.getElementById("Useremail");

  firebase
    .auth()
    .sendPasswordResetEmail(email.value)
    .then(() => {
      alert("password reset email sent...");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

// ***********************Google Login Auth*******************************

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
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

// ***********************Github Login Auth*******************************

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
