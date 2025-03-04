function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  document.querySelector(".color").textContent = color;
  document.querySelector("body").style.backgroundColor = color;
});
