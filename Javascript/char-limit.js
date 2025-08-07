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