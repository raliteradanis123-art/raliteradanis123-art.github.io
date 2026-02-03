// Message de confirmation lors de l'envoi du formulaire
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la page de se recharger
    alert('Merci ! Votre message a bien été envoyé.');
    this.reset(); // Vide le formulaire
});

