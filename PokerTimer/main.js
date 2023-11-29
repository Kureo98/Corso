// Inizializzazione Variabili
// --------------------------------//
let formTimer = document.getElementById("minutiTimer"); //Timer Value
let timer = document.getElementById("timer"); //Timer Display
// --------------------------------//
let smallBlind = document.getElementById("smallBlind"); //Small Blind Value
let bigBlind = document.getElementById("bigBlind"); //Big Blind Value
let blinds = document.getElementById("blinds"); //Blinds Display
// --------------------------------//
let NextBlinds = document.getElementById("nextBlinds"); //Next Blinds Display
// --------------------------------//
let playerCount = document.getElementById("playersCount"); //Players Value
let players = document.getElementById("players"); //Players Display
// --------------------------------//
let blindLevel = document.getElementById("blindLevel"); //Blind Level Display
// --------------------------------//
let playerStack = document.getElementById("playerStack"); //Chips Value
let chipCount = document.getElementById("chipCount"); //Chips Display
// --------------------------------//
let stopwatchD = document.getElementById("stopwatch"); //Stopwatch Display
let currentTimee = document.getElementById("currentTime"); //Current Time
// --------------------------------//
let submitButton = document.getElementById("submitButton");
// --------------------------------//

// Stopwatch variabili
let startTime;
let stopwatchInteval;
// Oggetti & Array
let timerInfo = {
  Timer: 0,
  Blinds: [0, 0],
  NextBlinds: [0, 0],
  Ante: 0,
  Players: 0,
  Break: 0,
  InitialStack: 0,
  Level: 1,
};

//Funzioni & Eventi

//POPOLIAMO POKER TIMER

function timerSetup() {
  timer.textContent = timerInfo.Timer + ":00"; //Timer
  blinds.textContent =
    "Blinds: " + timerInfo.Blinds[0] + " / " + timerInfo.Blinds[1]; //Small & Big Blinds
  NextBlinds.textContent =
    "Next Blinds: " + timerInfo.NextBlinds[0] + " / " + timerInfo.NextBlinds[1]; //Next Small & Big Blinds
  players.textContent = timerInfo.Players; //Players
  blindLevel.textContent = timerInfo.Level + "°"; //Blind Level
  chipCount.textContent = timerInfo.InitialStack * timerInfo.Players; //Chips Count
}

// EVENTO AL CLICK FOMR

submitButton.addEventListener("click", function (a) {
  a.preventDefault();

  if (
    formTimer.value.trim() !== "" &&
    smallBlind.value.trim() !== "" &&
    bigBlind.value.trim() !== "" &&
    playerCount.value.trim() !== ""
  ) {
    timerInfo.Timer = formTimer.value; //Timer
    timerInfo.Blinds[0] = smallBlind.value; //Small Blind
    timerInfo.Blinds[1] = bigBlind.value; //Big Blind
    timerInfo.NextBlinds[0] = parseInt(smallBlind.value) + 10; //Next Small Blind
    timerInfo.NextBlinds[1] = parseInt(bigBlind.value) + 20; //Next Big Blind
    timerInfo.Players = playerCount.value; //Players
    timerInfo.InitialStack = parseInt(playerStack.value); //Chips Iniziali
    timerSetup();

    startStopwatch();
  } else {
    alert("Completa correttamente i campi!");
  }
  formTimer.value = "";
  smallBlind.value = "";
  bigBlind.value = "";
  playerCount.value = "";
  playerStack.value = "";
});

// Aggiorniamo l'orario corrente

function updatecurrentTimee() {
  let oraCorrente = dayjs();
  let oraFormattata = oraCorrente.format("HH:mm");
  currentTimee.textContent = oraFormattata;
}
setInterval(updatecurrentTimee, 1000);
updatecurrentTimee();

// Logica del cronometro

function startStopwatch() {
  startTime = dayjs();
  stopwatchInteval = setInterval(updateStopwatch, 1000);
}
function updateStopwatch() {
  let currentTime = dayjs();
  let differenza = currentTime - startTime;
  stopwatchD.textContent = formatTime(differenza);
}
function formatTime(milliseconds) {
  let totalSeconds = Math.floor(milliseconds / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
function pad(value) {
  return String(value).padStart(2, "0");
}
timerSetup();
