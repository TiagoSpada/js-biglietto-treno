//chiedo all'utente i kilmetri e l'età
const km = parseInt(prompt("Inserisci il numero di chilometri da percorrere: ")) ;
const eta = parseInt(prompt("Inserisci l'età del passeggero: "));
const prezzoBaseKm = 0.21;
//calcolo il prezzo totale senza sconti basati sull'età
let prezzoTot = parseFloat(km * prezzoBaseKm)  ;

//calcolo il prezzo totale in base all'età
if (eta < 18) {
    prezzoTot -= (prezzoTot*0.2);
}
else if (eta > 65) {
    prezzoTot -= (prezzoTot*0.4);
}
//lascio solo 2 decimali
prezzoTot= prezzoTot.toFixed(2);
console.log("il prezzo totale da pagare è: "+prezzoTot+"€");
