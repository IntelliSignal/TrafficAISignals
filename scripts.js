document.addEventListener('DOMContentLoaded', () => {
    // Fade-in the title and subtitle
    gsap.from('.text-section h1', { opacity: 0, y: -50, duration: 1, ease: 'power3.out' });
    gsap.from('.text-section p', { opacity: 0, y: 50, duration: 1,ease: 'power3.out' });

    // Fade-in the buttons
    // gsap.from('.buttons button', { opacity: 1, y: 50, duration: 1, delay:0.2,ease: 'power3.out', stagger: 0.2 });

    
    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { scale: 1.05, duration: 0.3 });
        });
        button.addEventListener('mouseleave', () => {
            gsap.to(button, { scale: 1, duration: 0.3 });
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate feature cards on hover
    document.querySelectorAll('.feature-card').forEach(card => {
        gsap.fromTo(card, 
            { opacity: 0, y: 50 }, 
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'bottom 60%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('img'), { scale: 1.1, duration: 0.3 });
            gsap.to(card.querySelector('h3'), { color: '#1E88E5', duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('img'), { scale: 1, duration: 0.3 });
            gsap.to(card.querySelector('h3'), { color: '#000', duration: 0.3 });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Animate feature cards on hover
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('img'), { scale: 1.1, duration: 0.2 });
            gsap.to(card.querySelector('h3'), { color: '#1E88E5', duration: 0.2 });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('img'), { scale: 1, duration: 0.2 });
            gsap.to(card.querySelector('h3'), { color: '#000', duration: 0.2 });
        });
    });
});