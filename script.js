const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const stopwatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timelist = document.querySelector(".time-list");
const infoBtn = document.querySelector(".infoTime");
const info = document.querySelector(".info-shadow");
const closeInfoBtn = document.querySelector(".close");
let countTime;
let minutes = 0;
let seconds = 0;

const handleStart = () => {
  clearInterval(countTime);
  countTime = setInterval(() => {
    if (seconds < 9) {
      seconds++;
      stopwatch.textContent = `${minutes}:0${seconds}`;
    } else if (seconds >= 9 && seconds < 59) {
      seconds++;
      stopwatch.textContent = `${minutes}:${seconds}`;
    } else {
      seconds = 0;
      minutes++;
      stopwatch.textContent = `${minutes}:00`;
    }
  }, 1000);
};

const handlePause = () => {
  clearInterval(countTime);
};

let timesArray = [];

const handleStop = () => {
  if (stopwatch.textContent !== "0.00") {
    time.innerHTML = stopwatch.textContent;
    time.style.visibility = "visible";
    timesArray.push(stopwatch.textContent);
  }
  clearInterval(countTime);
  stopwatch.textContent = "0.00";
  timelist.textContent = "";
  minutes = 0;
  seconds = 0;
};

const handleReset = () => {
  time.style.visibility = "hidden";
  clearInterval(countTime);
  stopwatch.textContent = "0.00";
  timelist.textContent = "";
  minutes = 0;
  seconds = 0;
  timesArray = [];
};
const showHistory = () => {
  timelist.textContent = "";
  let index = 1;
  timesArray.forEach((li) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = `Pomiar ${index}:<span>${li}</span>`;
    timelist.appendChild(newLi);
    index++;
  });
};
const showInfo = () => {
  if (info.style.display !== "block") {
    info.style.display = "block";
  } else info.style.display = "none";
};

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);
resetBtn.addEventListener("click", handleReset);
historyBtn.addEventListener("click", showHistory);
infoBtn.addEventListener("click", showInfo);
closeInfoBtn.addEventListener("click", showInfo);
window.addEventListener("click", (event) =>
  event.target === info ? showInfo() : false
);
