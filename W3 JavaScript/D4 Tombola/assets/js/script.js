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
const createNum = () => {
  const tabellone = document.querySelector('#tabellone');
  tabellone.innerHTML = '';
  for (let i = 1; i <= 90; i++) {
    const cellNumber = document.createElement('div');
    cellNumber.classList.add('numero');
    if (usciti.includes(i)) {
      cellNumber.classList.add('uscito');
    }
    cellNumber.textContent = i;
    tabellone.appendChild(cellNumber);
  }
};
createNum();


// CREO LA FUNZIONA PER IL BOTTONE "ESTRAI"
const bottoneEstrai = document.querySelector('#estrai');
const estrai = () => {
  const sacchetto = [];
  for (let i = 1; i <= 90; i++)
    if (!usciti.includes(i)) {
      sacchetto.push(i);
    }
  if (sacchetto.length === 0) {
    alert('Numeri finiti!');
    return;
  }
  const casella = Math.floor(Math.random() * sacchetto.length);
  const numero = sacchetto[casella];

  usciti.push(numero)
  lastNum.innerHTML = numero;
  createNum();

  historyNum.classList.add('ultimo');
  historyNum.innerHTML = usciti.slice(-8);
  // console.log(usciti)
}
bottoneEstrai.addEventListener('click', estrai);
const lastNum = document.querySelector('#ultimo-numero');
const historyNum = document.querySelector('#cronologia');

// CREO LA FUNZIONE PER IL TASTO "RICOMINCIA"
const bottoneReset = document.querySelector('#reset');
const reset = () => {
  usciti = [];
  lastNum.innerHTML = '—';
  tabellone.innerHTML = '';
  historyNum.textContent = 'Nessun numero estratto.';
  createNum();
}
bottoneReset.addEventListener('click', reset);