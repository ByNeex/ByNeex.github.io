
// Création du dictionnaire pour la traduction
const translations = {
    'fr': `Étudiant en Double Licence Mathématiques & Informatique à l’Université de Toulouse, je construis un parcours où la rigueur mathématique et la puissance des outils informatiques se combinent pour développer des projets d’intelligence artificielle utiles et responsables.`,
    
    'en': `As a student pursuing a double degree in Mathematics & Computer Science at the University of Toulouse, I am building a career path where mathematical rigor and the power of computer tools combine to develop useful and responsible artificial intelligence projects.`
};



const frBtn = document.getElementById('fr-btn');
const enBtn = document.getElementById('en-btn');
const textPara = document.querySelector('.h-para');

// Fonction de changement en Français
frBtn.addEventListener('click', () => {

    frBtn.classList.add('active');
    enBtn.classList.remove('active');
    
    textPara.innerHTML = translations.fr;
});

// Fonction de changement en Anglais
enBtn.addEventListener('click', () => {
    enBtn.classList.add('active');
    frBtn.classList.remove('active');
    
    textPara.innerHTML = translations.en;
});
