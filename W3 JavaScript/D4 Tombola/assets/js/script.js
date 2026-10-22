/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

let usciti = []; // array dei numeri già estratti


/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/


// CREO I DIV CON I NUMERI ALL'INTERNO
const createNum = (num) => {
  const tabellone = document.querySelector('#tabellone');
  for (let i = 1; i <= 90; i++) {
    const cellNumber = document.createElement('div');
    cellNumber.classList.add('numero');
    cellNumber.textContent = i;
    tabellone.appendChild(cellNumber);
  }
};
createNum();

const bottoneEstrai = document.querySelector('#estrai');
const estrai = () => {
  const numero = Math.floor(Math.random() * 90) + 1;
  console.log(numero)
}
bottoneEstrai.addEventListener('click', estrai);