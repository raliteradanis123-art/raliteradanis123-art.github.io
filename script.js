// Message de confirmation lors de l'envoi du formulaire
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la page de se recharger
    alert('Merci ! Votre message a bien été envoyé.');
    this.reset(); // Vide le formulaire
});
// Défilement fluide pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


