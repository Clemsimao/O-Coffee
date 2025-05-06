// fonction avec manipulation du DOM pour le menu burger sur la version mobile 
document.addEventListener('DOMContentLoaded', function () {
    const menuBurger = document.querySelector('.menu-burger');
    const mainMenu = document.querySelector('.main-menu');

    if (menuBurger && mainMenu) {
        menuBurger.addEventListener('click', function () {
            mainMenu.classList.toggle('active');
        });
    }

    // fonction avec manipulation du DOM pour le boutton "voit tour le catalogue" sur la page catalogue, de base uniquement 6 produit sont affichés mais dès qu'on clique l'entiereté du catalogue s'affiche
    const bouttonMarron = document.getElementById('boutton-marron');
    if (bouttonMarron) {
        bouttonMarron.addEventListener('click', function() {
            const hiddenProducts = document.querySelectorAll('.produit.hidden-catalogue');
            hiddenProducts.forEach(product => {
                product.classList.remove('hidden-catalogue');
            });
            this.style.display = 'none'; 
        });
    }
});


// Leaflet
document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([50.33873589776579, 2.306368687725905], 13); // Coordonnées de Paris

    // Ajouter un fond de carte OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(map);

    // Créer une icône personnalisée
    var customIcon = L.icon({
        iconUrl: '../images/brown-pin.svg', // Remplacez par le chemin de votre icône personnalisée
        iconSize: [38, 38], // Taille de l'icône
        iconAnchor: [22, 38], // Point de l'icône qui correspondra à la position du marqueur
        popupAnchor: [-3, -38] // Point depuis lequel la popup doit s'ouvrir par rapport à l'icône
    });

    // Ajouter un marqueur avec l'icône personnalisée sur la carte
    L.marker([50.33873589776579, 2.306368687725905], { icon: customIcon }).addTo(map)
        .openPopup();
});

// EmailJS
(function() {
    // Remplace "YOUR_PUBLIC_KEY" par ta clé publique EmailJS
    emailjs.init("sxtfWQviLLEUSw8Qv");
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let form = this;
        let confirmationMessage = document.createElement("p");
        confirmationMessage.classList.add("success-message");

        emailjs.sendForm('service_tpxsczz', 'template_lywqgkj', form)
            .then(() => {
                confirmationMessage.textContent = "✅ Message envoyé avec succès ! Nous vous répondrons bientôt.";
                confirmationMessage.style.color = "green";
                form.after(confirmationMessage);
                form.reset(); // Réinitialise le formulaire après envoi
            })
            .catch((error) => {
                confirmationMessage.textContent = "❌ Échec de l'envoi. Vérifiez vos informations.";
                confirmationMessage.style.color = "red";
                form.after(confirmationMessage);
            });
    });
};
