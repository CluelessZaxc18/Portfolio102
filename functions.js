function checkLogin() {
  const Email = document.getElementById("Email").value;
  const Password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (Email == "Zaxc@gmail.com" && Password == "Zaxc123") {
    window.location.href = "Index.html";
  } else {
    message.textContent = "Wrong email or password. Try again.";
  }
}


