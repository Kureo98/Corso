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
let currentTime = document.getElementById("currentTime"); //Current Time
let oraCorrente = dayjs();
let oraFormattata = oraCorrente.format("HH:mm:ss");
// --------------------------------//
let submitButton = document.getElementById("submitButton");

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
submitButton.addEventListener("click", function (a) {
  a.preventDefault();

  if (
    formTimer.value.trim() !== "" &&
    smallBlind.value.trim() !== "" &&
    bigBlind.value.trim() !== "" &&
    playerCount.value.trim() !== ""
  ) {
    timer = true;
    timerInfo.Timer = formTimer.value; //Timer
    timerInfo.Blinds[0] = smallBlind.value; //Small Blind
    timerInfo.Blinds[1] = bigBlind.value; //Big Blind
    timerInfo.NextBlinds[0] = parseInt(smallBlind.value) + 10; //Next Small Blind
    timerInfo.NextBlinds[1] = parseInt(bigBlind.value) + 20; //Next Big Blind
    timerInfo.Players = playerCount.value; //Players
    timerInfo.InitialStack = parseInt(playerStack.value); //Chips Iniziali
    timerSetup();
  } else {
    alert("Completa correttamente i campi!");
  }
  formTimer.value = "";
  smallBlind.value = "";
  bigBlind.value = "";
  playerCount.value = "";
  playerStack.value = "";
});

function timerSetup() {
  timer.textContent = timerInfo.Timer + ":00"; //Timer
  blinds.textContent =
    "Blinds: " + timerInfo.Blinds[0] + " / " + timerInfo.Blinds[1]; //Small & Big Blinds
  NextBlinds.textContent =
    "Next Blinds: " + timerInfo.NextBlinds[0] + " / " + timerInfo.NextBlinds[1]; //Next Small & Big Blinds
  players.textContent = timerInfo.Players; //Players
  blindLevel.textContent = timerInfo.Level + "°"; //Blind Level
  chipCount.textContent = timerInfo.InitialStack * timerInfo.Players; //Chips Count
  currentTime.textContent = oraFormattata;
}

timerSetup();
