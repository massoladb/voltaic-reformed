let btn = document.getElementById("continueCad");
let modal = document.getElementById("modalCad");
let closeModal = document.getElementById("closeModal");

btn.addEventListener('click', (event) => {
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', (event) => {
    modal.style.display = 'none';
});