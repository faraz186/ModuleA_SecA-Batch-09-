function validation() {
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("cpassword").value;
  var mobile = document.getElementById("mobile").value;

  var usercheck = /^[a-z0-9_-]{3,15}$/;
  var emailcheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  var mobilecheck = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;

  if (usercheck.test(username)) {
    document.getElementById("userError").innerHTML = "";
  } else {
    document.getElementById("userError").innerHTML = "** username is Invalid";
    return false;
  }

  if (emailcheck.test(email)) {
    document.getElementById("emailError").innerHTML = "";
  } else {
    document.getElementById("emailError").innerHTML = "** Email is Invalid";
    return false;
  }

  if (passwordcheck.test(password)) {
    document.getElementById("passwordError").innerHTML = "";
  } else {
    document.getElementById("passwordError").innerHTML =
      "** Password is Invalid";
    return false;
  }

  if (mobilecheck.test(mobile)) {
    document.getElementById("mobileNumError").innerHTML = "";
  } else {
    document.getElementById("mobileNumError").innerHTML =
      "** mobile-no is Invalid";
    return false;
  }

  let obj = {
    email,
    username,
    password,
    mobile,
  };

  Swal.fire({
    position: "bottom-end",
    icon: "success",
    title: "Form has been submitted...",
    showConfirmButton: false,
    timer: 2000,
  });

  console.log(obj);
  return false;
}
