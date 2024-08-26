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
const iconGo = document.querySelector(".bi-pause-circle");
const iconReset = document.querySelector(".bi-x-circle");
const iconCircle = document.querySelector(".circle-icon");
let myTimer = createElementTimer();

function baslat() {
  startButton.innerText = "";
  startButton.appendChild(myTimer);
  iconPlay.style = "display:none";
  if (iconCircle.children.length < 2) {
    createElement();
    startButton.style = "background-color:#DCFAF8";
  }
  let timer = setInterval(kronometre, 1000);
  }

startButton.addEventListener("click", baslat);
iconPlay.addEventListener("click", baslat);



function createElement() {
  const iPause = document.createElement("i");
  iPause.className = "bi-pause-circle";
  const iReset = document.createElement("i");
  iReset.className = "bi-x-circle";

  document.querySelector(".circle-icon").appendChild(iPause);
  document.querySelector(".circle-icon").appendChild(iReset);
}

function createElementTimer() {
  let span1 = document.createElement("span");
  span1.innerText = "00";

  let point1 = document.createElement("span");
  point1.innerText = ":";

  let span2 = document.createElement("span");
  span2.innerText = "00";

  let point2 = document.createElement("span");
  point2.innerText = ":";

  let span3 = document.createElement("span");
  span3.innerText = "00";

  let divTimer = document.createElement("div");
  divTimer.className = "timer-content";

  divTimer.appendChild(span1);
  divTimer.appendChild(point1);
  divTimer.appendChild(span2);
  divTimer.appendChild(point2);
  divTimer.appendChild(span3);

  return divTimer;
}

var saniye = 0;
var dakika = 0;
var saat = 0;

function kronometre() {
  saniye++;

  if (saniye <= 9) {
    myTimer.children[4].innerText = "0" + saniye;
  }
  if (saniye > 9) {
    myTimer.children[4].innerText = saniye;
  }
  if (saniye > 59) {
    ++dakika;
    myTimer.children[2].innerText = "0" + dakika;
    saniye = 0;
    myTimer.children[4].innerText = "0" + saniye;
  }
  if (dakika <= 9) {
    myTimer.children[2].innerText = "0" + dakika;
  }
  if (dakika > 9) {
    myTimer.children[2].innerText = dakika;
  }
  if (dakika > 59) {
    ++saat;
    myTimer.children[0].innerText = "0" + saat;
    dakika = 0;
    myTimer.children[2].innerText = "0" + dakika;
  }
}

