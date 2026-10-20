/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

//trovare l'ul e creare un li da inserire all'interno
const aggiungiTask = (testo) => {
  const lista = document.querySelector('#lista-task');            // trovo ul
  const li = document.createElement('li');                        // creo li
  li.textContent = testo;                                         // metto il testo dinamico  
  lista.append(li);
};

aggiungiTask("Pagare le bollette");
aggiungiTask("Studiare JavaScript");
aggiungiTask("Comprare il pane");
aggiungiTask("Chiamare il dentista");
aggiungiTask("Riposarsi");

