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


const button = document.getElementById('bottone-aggiungi');
const input = document.getElementById('nuovo-task');

button.addEventListener('click', (e) => {
  console.log(input.value)

  myTask.push({ titoloTask: input.value, priorita: "si", data: new Date() });

  aggiungiTask();
  aggiornaContatore();
});




const lista = document.querySelector('#lista-task');
const contatore = document.querySelector('#contatore');

const myTask = [
  {
    titoloTask: 'Pagare le bollette',
    priorita: 'alta',
    data: new Date(),
  },
  {
    titoloTask: 'Studiare JavaScript',
    priorita: 'media',
    data: new Date(),
  },
  {
    titoloTask: 'Comprare il pane',
    priorita: 'bassa',
    data: new Date(),
  },
  {
    titoloTask: 'Chiamare il dentista',
    priorita: 'alta',
    data: new Date(),
  },
  {
    titoloTask: 'Riposarsi',
    priorita: 'bassa',
    data: new Date(),
  },
  {
    titoloTask: 'Spritz Time',
    priorita: 'alta',
    data: new Date(),
  },
];

function aggiungiTask() {
  lista.textContent = '';
  myTask.forEach((task, index) => {
    // <li class="priorita-xxx">
    const newLi = document.createElement('li');
    newLi.classList.add(`priorita-${task.priorita}`);

    // testo del task
    const textSpan = document.createElement('span');
    textSpan.textContent = task.titoloTask;
    newLi.appendChild(textSpan);

    // <span class="badge">
    const badge = document.createElement('span');
    badge.classList.add('badge');
    badge.textContent = task.priorita;
    newLi.appendChild(badge);

    // <span class="data"> con la data
    const spanData = document.createElement('span');
    spanData.classList.add('data');
    spanData.textContent = task.data.toLocaleString('it-IT');
    // bottone elimina
    const elimina = document.createElement('button');
    elimina.textContent = 'Elimina';
    elimina.addEventListener('click', () => {
      myTask.splice(index, 1);
      aggiungiTask();
      aggiornaContatore();
    })

    // <div class="divData"> che contiene data + bottone (come il nostro)
    const divData = document.createElement('div');
    divData.classList.add('divData');
    divData.append(spanData, elimina);
    newLi.appendChild(divData);

    lista.appendChild(newLi);
  });
}

function aggiornaContatore() {
  contatore.textContent = myTask.length;
}

aggiungiTask();
aggiornaContatore();