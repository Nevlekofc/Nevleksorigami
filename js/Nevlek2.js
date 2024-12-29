const cardinfor = document.querySelectorAll('.cardinfor');

function checkVisibility() {
    cardinfor.forEach(cardinfor => {
        const rect = cardinfor.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            cardinfor.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Verifica a visibilidade ao carregar a página