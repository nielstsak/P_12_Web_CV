// script/script.js

// Attend que le contenu du DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {

    // --- FONCTIONS ---

    /**
     * Gère l'effet de la barre de navigation qui change de couleur au défilement.
     */
    function handleNavbarScroll() {
        const header = document.querySelector(".navbar");
        if (!header) return; // Sécurité si la navbar n'existe pas

        window.addEventListener('scroll', function() {
            if (window.scrollY >= 100) {
                header.classList.add("navbarDark");
            } else {
                header.classList.remove("navbarDark");
            }
        });
    }

    /**
     * Gère la fermeture du menu burger sur mobile après un clic sur un lien.
     */
    function handleNavbarCollapse() {
        const navLinks = document.querySelectorAll(".nav-link");
        const menuToggle = document.getElementById("navbarSupportedContent");
        
        if (!menuToggle) return; // Sécurité

        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                if (menuToggle.classList.contains('show')) {
                    bsCollapse.toggle();
                }
            });
        });
    }

    /**
     * Charge les données des compétences depuis un fichier JSON et les affiche.
     */
    function renderSkills() {
        const container = document.getElementById("skills-container");
        if (!container) return;

        fetch('data/skills.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(skillsData => {
                container.innerHTML = ''; // Vide le conteneur
                skillsData.forEach(item => {
                    const cardWrapper = document.createElement("div");
                    cardWrapper.classList.add("col-lg-4", "col-md-6", "mb-4");
                    
                    cardWrapper.innerHTML = `
                        <div class="card skillsText">
                            <img src="${item.image}" class="card-img-top skills-card-img" alt="Logo de ${item.title}" loading="lazy">
                            <div class="card-body">
                                <h3 class="card-title h5">${item.title}</h3>
                                <p class="card-text">${item.text}</p>
                            </div>
                        </div>
                    `;
                    container.appendChild(cardWrapper);
                });
            })
            .catch(error => {
                console.error("Erreur lors du chargement du fichier de compétences (skills.json):", error);
                container.innerHTML = `<p class="text-center text-danger">Impossible de charger les compétences. Assurez-vous que le fichier data/skills.json est accessible.</p>`;
            });
    }

    /**
     * Charge les données du portfolio depuis un fichier JSON et les affiche.
     */
    function renderPortfolio() {
        const container = document.getElementById("portfolio-container");
        if (!container) return;

        fetch('data/portfolio.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(portfolioData => {
                container.innerHTML = ''; // Vide le conteneur
                portfolioData.forEach(item => {
                    const cardWrapper = document.createElement("div");
                    cardWrapper.classList.add("col-lg-6", "mb-4");
                    
                    cardWrapper.innerHTML = `
                        <div class="card portfolioContent">
                            <img class="card-img-top" src="${item.image}" alt="Aperçu du projet ${item.title}" loading="lazy">
                            <div class="card-body">
                                <h3 class="card-title h5">${item.title}</h3>
                                <p class="card-text">${item.text}</p>
                                <div class="text-center mt-3">
                                    <a href="${item.link}" class="btn btn-success" target="_blank" rel="noopener noreferrer">Voir le projet</a>
                                </div>
                            </div>
                        </div>
                    `;
                    container.appendChild(cardWrapper);
                });
            })
            .catch(error => {
                console.error("Erreur lors du chargement du fichier de portfolio (portfolio.json):", error);
                container.innerHTML = `<p class="text-center text-danger">Impossible de charger les projets. Assurez-vous que le fichier data/portfolio.json est accessible.</p>`;
            });
    }

    // --- APPELS DE FONCTIONS ---
    handleNavbarScroll();
    handleNavbarCollapse();
    renderSkills();
    renderPortfolio();

});
