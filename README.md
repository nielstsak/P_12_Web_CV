# P12-testeur-logiciel-portfolio
# Portfolio de Développeur Web & Testeur Logiciel

Ce projet est la création d'un portfolio personnel dans le cadre de la formation "Testeur Logiciel" d'OpenClassrooms. L'objectif était de partir d'une base de code existante, de corriger ses bugs, d'optimiser ses performances et son accessibilité, puis de le personnaliser pour présenter mon profil et mes compétences.

**Lien vers le site déployé :** [https://nielstsak.github.io/P_12_Web_CV/](https://nielstsak.github.io/P_12_Web_CV/)

---

## Contexte du projet

Le projet a été divisé en deux phases principales :

1.  **Phase 1 : Optimisation et correction de bugs**
    * Prise en main d'une base de code existante.
    * Identification et résolution des problèmes techniques.
    * Amélioration des performances globales, du SEO et de l'accessibilité.

2.  **Phase 2 : Personnalisation du contenu**
    * Modification du contenu pour refléter mon profil, mes formations et mes compétences.
    * Intégration de mes propres projets réalisés durant la formation.
    * Déploiement du site en ligne via GitHub Pages.

---

## Tâches réalisées

### Phase 1 : Optimisation et Corrections

#### Bugs Corrigés :
1.  **Icônes Font Awesome manquantes** : Certaines icônes n'apparaissaient pas car le kit Font Awesome utilisé était incomplet. Le problème a été résolu en utilisant un lien CDN vers le kit complet.
2.  **Contenu dynamique non affiché** : Le chargement des projets et des compétences depuis les fichiers JSON échouait silencieusement à cause d'une faute de frappe dans le code JavaScript (`apendChild` au lieu de `appendChild`).
3.  **Erreurs de chargement des données (Fetch)** : La méthode `fetch()` pour charger les fichiers JSON locaux peut être bloquante ou échouer selon l'environnement. Le script a été fiabilisé avec une gestion des erreurs pour s'assurer que le contenu s'affiche correctement.

#### Optimisations Implémentées :
1.  **Performances (Lighthouse)** :
    * **Images** : Redimensionnement et compression des images pour réduire leur poids et accélérer le temps de chargement.
    * **CSS** : Les feuilles de style ont été optimisées pour ne pas bloquer le rendu initial de la page.
    * **Préchargement** : Ajout de `preload` sur l'image principale (LCP) pour un affichage plus rapide.
2.  **Accessibilité (rapport WAVE/WebAIM)** :
    * **Contrastes de couleurs** : Augmentation du contraste entre le texte et l'arrière-plan, notamment sur la bannière principale.
    * **Sémantique HTML** : Correction de la hiérarchie des titres (H1, H2, H3), ajout de balises sémantiques (`main`, `header`) et d'un lien d'évitement.
    * **Attributs ARIA** : Ajout de descriptions alternatives pour les lecteurs d'écran, notamment pour les liens qui s'ouvrent dans un nouvel onglet.
3.  **SEO** :
    * Assurer un seul `<h1>` par page.
    * Ajout d'une balise `meta description` pertinente.
    * Utilisation d'attributs `alt` descriptifs pour toutes les images.

### Phase 2 : Personnalisation

* **Contenu du profil** : Remplacement du texte "Lorem Ipsum" par une présentation personnelle basée sur les informations de mon CV.
* **Compétences** : Mise à jour du fichier `data/skills.json` pour lister mes compétences réelles en développement et en test logiciel.
* **Projets** : Mise à jour du fichier `data/portfolio.json` pour présenter quatre projets significatifs de ma formation, avec des descriptions et des liens vers les dépôts GitHub correspondants.

---

## Technologies utilisées

* HTML5
* CSS3
* JavaScript (ES6)
* Bootstrap 5
* Font Awesome
* GitHub & GitHub Pages pour le versioning et le déploiement.

---

## Lancer le projet localement

1.  Clonez ce dépôt sur votre machine locale :
    ```bash
    git clone [https://github.com/nielstsak/P_12_Web_CV.git](https://github.com/nielstsak/P_12_Web_CV.git)
    ```
2.  Naviguez dans le dossier du projet :
    ```bash
    cd P_12_Web_CV
    ```
3.  Ouvrez le fichier `index.html` dans votre navigateur web.
