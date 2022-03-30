// Creazione array utenti accettati
const mailList = [
    "carlovanzini@gmail.com",
    "marcgene@gmail.com",
    "guidolavespa@gmail.com",
    "homersimpson@hotmail.com",
    "paperella@boolean.com",
    "petergriffin@yahoo.com",
    "javascriptisfunny@gmail.com"
];

// Inizializzazione variabili
const app = document.getElementById("app");
const check = document.getElementById("check");
const reset = document.getElementById("reset");

// Creazione elemento di output
const h2 = document.createElement("h2");
app.append(h2);

// Eventi
check.addEventListener("click", checkEmail);
reset.addEventListener("click", resetFunction);

// Funzioni
// Controllo email
function checkEmail() {
    const userMail = document.getElementById("userMail").value;
    // ciclo for per confronto con elementi array
    for(let i = 0; i < mailList.length; i++) {
        if(userMail == mailList[i]) {
            h2.innerHTML = "Puoi entrare"
            var verify = true;
        }
    }
    // if per output alternativo
    if(!(verify)) {
        h2.innerHTML = "Non puoi entrare";
    }
}
// Reset elemento di output
function resetFunction() {
    h2.innerHTML = "";
}
