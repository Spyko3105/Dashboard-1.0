// Fonction pour démarrer le bot
document.getElementById('start').addEventListener('click', () => {
    fetch('/.netlify/functions/startBot')
            .then(response => response.json())
                    .then(data => alert(data.message))
                            .catch(error => console.error('Erreur lors du démarrage :', error));
                            });

                            // Fonction pour éteindre le bot
                            document.getElementById('stop').addEventListener('click', () => {
                                fetch('/.netlify/functions/stopBot')
                                        .then(response => response.json())
                                                .then(data => alert(data.message))
                                                        .catch(error => console.error('Erreur lors de l\'arrêt :', error));
                                                        });