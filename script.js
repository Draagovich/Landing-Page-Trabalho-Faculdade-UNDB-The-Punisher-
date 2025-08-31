document.addEventListener('DOMContentLoaded', function() {
    // Animação de elementos ao rolar a página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    // Seleciona todos os elementos que devem ter animação
    document.querySelectorAll('.section h2, .content-box .text, .content-box .image, .symbol-image, .symbol-text p').forEach(el => {
        el.classList.add('fade-in');
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Adiciona classes de delay para criar efeito cascata
    document.querySelectorAll('.content-box .text p:nth-child(1), .symbol-text p:nth-child(1)').forEach(el => {
        el.classList.add('delay-1');
    });

    document.querySelectorAll('.content-box .text p:nth-child(2), .symbol-text p:nth-child(2)').forEach(el => {
        el.classList.add('delay-2');
    });

    document.querySelectorAll('.content-box .text p:nth-child(3), .symbol-text p:nth-child(3)').forEach(el => {
        el.classList.add('delay-3');
    });

    // Efeito de header ao rolar
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Rolagem suave para links de navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito parallax no hero
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        
        // Ajusta a posição do background conforme o scroll
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });

    // Adiciona efeito de hover nas imagens
    document.querySelectorAll('.image, .symbol-image').forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.querySelector('img').style.transform = 'scale(1.05)';
        });
        
        image.addEventListener('mouseleave', () => {
            image.querySelector('img').style.transform = 'scale(1)';
        });
    });
});