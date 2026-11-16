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
    constructor(_titolo, _autore, _anno, _letto) {
        this.titolo = _titolo;
        this.autore = _autore;
        this.anno = _anno;
        this.letto = _letto;
    }
}

class LibroDigitale extends Libro {
    constructor(_titolo, _autore, _anno, _letto, _formato, _dimenisoneMb) {
        super(_titolo, _autore, _anno, _letto);
        this.formato = _formato;
        this.dimenisoneMb = _dimenisoneMb;
    }
}
// === Stato (array di libri) ===



// === Render ===



// === Eventi ===
