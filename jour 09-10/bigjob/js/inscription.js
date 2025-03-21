document.addEventListener('DOMContentLoaded', function() {
    const inscriptionForm = document.getElementById('inscriptionForm');
    
    if (inscriptionForm) {
        inscriptionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = document.getElementById('emailInscription').value;
            const nom = document.getElementById('nomInscription').value;
            const prenom = document.getElementById('prenomInscription').value;
            const dateVisite = document.getElementById('dateVisiteInscription').value;
            const creneau = document.getElementById('creneauInscription').value;

            console.log('Données d\'inscription:', { email, nom, prenom, dateVisite, creneau });

            // Ici, vous enverriez normalement ces données à votre serveur
            // Pour l'instant, nous allons simplement afficher un message
            alert('Inscription réussie ! Merci ' + prenom + ' ' + nom + ' pour votre inscription.');

            // Réinitialiser le formulaire
            inscriptionForm.reset();
        });
    } else {
        console.error('Le formulaire d\'inscription n\'a pas été trouvé');
    }
});

