// Inizializzazione variabili
const app = document.getElementById("app");
const play = document.getElementById("play");

//Creazione elementi di output
const h2 = document.createElement("h2");
app.prepend(h2);
const p_pc = document.createElement("p");
app.prepend(p_pc);
const p_user = document.createElement("p");
app.prepend(p_user);

// Eventi
play.addEventListener("click", playFunction)

// Funzioni
function playFunction() {
    const pcNum = Math.floor(Math.random() * 6) + 1;
    p_pc.innerHTML = `Il numero del pc: ${pcNum}`;
    const userNum = Math.floor(Math.random() * 6) + 1;
    p_user.innerHTML = `Il tuo numero: ${userNum}`;
    if(userNum > pcNum) {
        h2.innerHTML = "Hai vinto"
    } else if(userNum < pcNum){
        h2.innerHTML = "Hai perso"
    } else {
        h2.innerHTML = "Pareggio"
    }
}