
const openModal = document.querySelector('#openModal');
const closeModal = document.querySelector('#closeModal');
const overlay = document.querySelector('#overlay');


openModal.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'block';
});


closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'none';
});