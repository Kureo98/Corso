// Definiamo varialibili
let button1 = document.getElementById("button1");
let header1 = document.getElementById("Header");
let librii = document.getElementById("libri");
let isClicked = false;

// Objects e Arrays
let libreria = [
  { libro: "Titani uniti", autore: "Nicholas Cage" },
  { libro: "Dracula", autore: "Cula" },
];

// Creazione elemento su oggetto
libreria.forEach((tomo) => {
  let titolo = document.createElement("h3");
  let paragrafo = document.createElement("p");
  titolo.textContent = tomo.libro;
  paragrafo.textContent = "di " + tomo.autore;
  librii.appendChild(titolo);
  librii.appendChild(paragrafo);
});

// Funzione cambia testo
function changeText(header1, textChanged) {
  return (header1.textContent = textChanged);
}

changeText(header1, "Ciao a tutti");

// Bottone cambia colore al click
button1.addEventListener("click", function () {
  if (isClicked) {
    button1.style.backgroundColor = "";
    isClicked = false;
  } else {
    button1.style.backgroundColor = "red";
    isClicked = true;
  }
});
