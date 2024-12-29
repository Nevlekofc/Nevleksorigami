document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.cad');

    cards.forEach(card => {
        cad.addEventListener('click', () => {
            alert('Você clicou no cartão: ' + cad.querySelector('h2').innerText);
        });
    });
});


