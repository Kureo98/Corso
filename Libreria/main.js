// Definiamo varialibili
let button1 = document.getElementById("button1");
let header1 = document.getElementById("Header");
let librii = document.getElementById("libri");
let isClicked = false;
let formLibri = document.getElementById("formLibri");
let formTitle = document.getElementById("titoloLibro");
let formAutor = document.getElementById("autoreLibro");
let formButton = document.getElementById("bottoneForm");

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

// Aggiungi libro al submit
formLibri.addEventListener("submit", function (a) {
  a.preventDefault();
  if (formTitle.value.trim() != "" && formAutor.value.trim() != "") {
    libreria.push({ libro: formTitle.value, autore: formAutor.value });
    formTitle.value = "";
    formAutor.value = "";
  } else {
    return alert("Inserisci elementi validi");
  }
  return aggiornaLibreria();
});

function aggiornaLibreria() {
  librii.innerHTML = "";
  libreria.forEach((tomo) => {
    let titolo = document.createElement("h3");
    let paragrafo = document.createElement("p");
    titolo.textContent = tomo.libro;
    paragrafo.textContent = "di " + tomo.autore;
    librii.appendChild(titolo);
    librii.appendChild(paragrafo);
  });
}
aggiornaLibreria();
