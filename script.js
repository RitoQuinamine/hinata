// --- 1. Animação de Entrada dos Elementos (Scroll Fade) ---
const elementsToFade = document.querySelectorAll('.element-to-fade');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

elementsToFade.forEach(element => {
    observer.observe(element);
});

// Animação inicial do cabeçalho com timing refinado
document.addEventListener('DOMContentLoaded', () => {
    const headerElements = document.querySelectorAll('.hero-section h1, .hero-section .subtitle, #cake-container, #play-btn');
    
    // Atraso inicial para carregar o fundo
    const initialDelay = 600; 
    
    // Incremento suave entre os elementos
    const increment = 350; 

    headerElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in-active');
        }, initialDelay + index * increment); 
    });
});


// --- 2. Lógica do Botão de Música e Feedback Visual ---
function toggleMusic() {
    const music = document.getElementById('background-music');
    const btn = document.getElementById('play-btn');
    
    if (music.paused) {
        music.play().then(() => {
            btn.innerText = '🎶 Pausar Música';
            // Feedback visual ao tocar
            btn.style.backgroundColor = 'var(--secondary-color)';
            btn.style.color = 'var(--background-dark)';
            btn.style.boxShadow = '0 0 15px var(--secondary-color)';
        }).catch(e => {
            console.error("Erro ao tocar música:", e);
            btn.innerText = '🎶 Tocar Música (Erro)';
        });
    } else {
        music.pause();
        btn.innerText = '🎶 Tocar Música';
        // Feedback visual ao pausar
        btn.style.backgroundColor = 'var(--primary-color)';
        btn.style.color = 'var(--background-dark)';
        btn.style.boxShadow = '0 0 15px var(--primary-color)';
    }
}