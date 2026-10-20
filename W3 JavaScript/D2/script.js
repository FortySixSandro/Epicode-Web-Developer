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




// trovare l'ul e creare un li da inserire all'interno
const aggiungiTask = (testo, priorità) => {
  const lista = document.querySelector('#lista-task');            // trovo ul
  const li = document.createElement('li');                        // creo li
  li.classList.add('priorita-' + priorità);
  li.textContent = testo;                                         // metto il testo dinamico  
  const d = new Date();
  const todayDate = d.toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" });

  const spanData = document.createElement('span');
  spanData.textContent = todayDate;
  spanData.classList.add('data');
  li.append(spanData);
  lista.append(li);
};

aggiungiTask('Pagare le bollette', "alta");
aggiungiTask('Studiare JavaScript', "media");
aggiungiTask('Comprare il pane', "bassa");
aggiungiTask('Chiamare il dentista', "alta");
aggiungiTask('Riposarsi', "bassa");

// aggiungere la data
