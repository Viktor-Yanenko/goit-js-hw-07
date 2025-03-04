const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
  const name = event.currentTarget.value.trim();
  if (name === "") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = name;
  }
});
