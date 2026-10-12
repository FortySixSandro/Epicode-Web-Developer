/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const NOME = 'Alessandro';
const COGNOME = 'Milazzo';
console.log(`Ciao mi chiamo ${NOME} ${COGNOME}.`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a = 2;
const b = 10;
console.log(`La somma è: ${a + b}`);
console.log(`La differenza è: ${b - a}`);
console.log(`Il prodotto è: ${a * b}`);
console.log(`La divisione è: ${b / a}`);
console.log(`Il resto è: ${a % b}`);
console.log(`L'elevamento è: ${a ** b}`);
/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ANNONASCITA = 1998;
const ANNOCORRENTE = 2026;
console.log(`La mia età attuale è: ${ANNOCORRENTE - ANNONASCITA}`);
console.log(`La mia età tra 10 anni sarà di: ${ANNOCORRENTE - ANNONASCITA + 10}`);
console.log(`La mia età 5 anni fa era: ${ANNOCORRENTE - ANNONASCITA - 5}`);
/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let eta = 28;
console.log(`La mia eta è: ${eta} - Sono maggiorenne? ${28 > 18}`);
/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let parola = 'ciao';
console.log(`parola è di tipo: "${typeof parola}"`);
let numero = 4;
console.log(`4 è di tipo: "${typeof numero}"`);
let bulean = true;
console.log(`bulean è di tipo: "${typeof bulean}"`);
let vuoto = null;
console.log(`vuoto è di tipo: "${typeof vuoto}"`);
let indefinito;
console.log(`indefinito è di tipo: "${typeof indefinito}"`);
/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 5;
let stringa1 = '5';
console.log(`${numero1 == stringa1}`);
console.log(`${numero1 === stringa1}`);        //il valore delle due variabili è uguale ma il tipo è differente.

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3         //53
   - "5" - 3         //2
   - true + 1        //2
   - "10" * "2"      //20
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = "5";
let num2 = 3;
let vero = true;
let num10 = "10";
console.log(`${"5" + 3 }`);
console.log(`${"5" - 3}`);
console.log(`${true + 1}`);
console.log("10" * "2")
/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let variabile = 4;
console.log(`Il numero ${variabile} è pari: ${variabile % 2} quindi ${variabile % 2 === 0}`);
console.log(`Il numero ${variabile} è divisibile per tre: ${variabile % 3} quindi ${variabile % 2 === 3}`);
console.log(`Il numero ${variabile} è pari e divisibile per tre: ${variabile % 3} quindi ${variabile % 2 === 3}`);
/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
