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

const messageBox = document.getElementById("message");
const charCount = document.getElementById("charCount");
const warning = document.getElementById("warning");

messageBox.addEventListener("input", () => {
  const currentLength = messageBox.value.length;
  charCount.textContent = `${currentLength} / 150 characters`;

  if (currentLength >= 150) {
    warning.style.display = "block";
  } else {
    warning.style.display = "none";
  }
});

