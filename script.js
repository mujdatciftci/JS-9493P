const numberButton = document.getElementById("numberButton");
function up() {
  let currentValue = parseInt(numberButton.innerText);
  currentValue++;
  numberButton.innerText = currentValue;
  numberButton.style = "background-color:#FFE0EB";
}
numberButton.addEventListener("click", up);

const startButton = document.getElementById("startButton");
const iconPlay = document.querySelector(".bi-play-circle");
const iconCircle = document.querySelector(".circle-icon");

function baslat() {
  startButton.innerText = "00:00:00";
  iconPlay.style = "display:none";
  if (iconCircle.children.length < 2) {
    createElement();
    startButton.style = "background-color:#DCFAF8";
  }
}
startButton.addEventListener("click", baslat);

function createElement() {
  const iPause = document.createElement("i");
  iPause.className = "bi-pause-circle";
  const iReset = document.createElement("i");
  iReset.className = "bi-x-circle";

  document.querySelector(".circle-icon").appendChild(iPause);
  document.querySelector(".circle-icon").appendChild(iReset);
}
