function checkLogin() {
  const Email = document.getElementById("Email").value;
  const Password = document.getElementById("password").value;
  const message = document.getElementById("message1");

  if (Email == "Zaxc@gmail.com" && Password == "Zaxc123") {
    window.location.href = "Index.html";
  } else {
    message.textContent = "Wrong email or password. Try again.";
  }
}

function sendingEmail() {
  const Email = document.getElementById("Email2").value;
  const message = document.getElementById("message2");

  if (Email2) {
    window.alert("An Email has been sent.");
  }
  else {
    window.alert("Fill up the message or enter an email first.");
  }
}

