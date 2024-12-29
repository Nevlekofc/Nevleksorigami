//animação abrir as imagens
const cards = document.querySelectorAll('.card');

function checkVisibility() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);