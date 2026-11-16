// Mini-libreria — Settimana VII Giorno I
//
// Devi fare 4 cose:
// 1. Definire una classe Libro (titolo, autore, anno, letto)
// 2. Definire una classe LibroDigitale che estende Libro (aggiunge formato, dimensioneMb)
// 3. Aggiungere un listener al form che crea una nuova istanza e la aggiunge all'array
// 4. Renderizzare la lista nel <ul id="lista-libri"> via innerHTML
//
// Bonus: bottone "Segna come letto" su ogni elemento, gestito con event delegation.


// === Classi ===

class Libro {
    letto = false;
    constructor(_titolo, _autore, _anno,) {
        this.id = crypto.randomUUID();
        this.titolo = _titolo;
        this.autore = _autore;
        this.anno = _anno;
    }
    segnaComeLetto() {
        this.letto = true;
    }
    formato() { return `cartaceo` }
}

class LibroDigitale extends Libro {
    constructor(_titolo, _autore, _anno, _dimensioneMb) {
        super(_titolo, _autore, _anno,);
        this.dimensioneMb = _dimensioneMb;
    }
    formato() { return `digitale (${this.dimensioneMb} MB)` };
}

const a = new Libro('Dune', 'Herbert', 1965);
const b = new LibroDigitale('Neuromante', 'Gibson', 1984, 2.5);

console.log(a.formato());
console.log(b.formato());
// === Stato (array di libri) ===



// === Render ===



// === Eventi ===
