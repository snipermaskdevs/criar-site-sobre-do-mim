// Função para animar o scroll até as seções ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Adicionando um efeito de fade-in nas seções conforme o usuário rola a página
const sections = document.querySelectorAll('.sobre, .habilidades, .interesses, .contato');

const options = {
    root: null, // Aplica no viewport
    threshold: 0.1, // Ativa a animação quando 10% da seção é visível
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Animação de fade-in (pode ser ajustada no CSS)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(item => {
        item.classList.remove('fade-in');
    });
});

// Animação de destaque nas habilidades ao passar o mouse
const habilidades = document.querySelectorAll('.habilidade');

habilidades.forEach(habilidade => {
    habilidade.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });

    habilidade.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
    });
});

// Animação de fade-in para as redes sociais
const redesSociais = document.querySelectorAll('.redes-sociais a');
redesSociais.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});
