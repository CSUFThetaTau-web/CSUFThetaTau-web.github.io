// variables
const mobileMen = document.querySelector('#mobile-menu');
const mobileMenInt = document.querySelector('#internal-mobile-menu');
const mobileMenLinks = document.querySelector('.mobileNav-menu');

// display mobile menu
mobileMen.addEventListener('click', mobileMenu = () => {
    mobileMen.classList.toggle('is-active');
    mobileMenInt.classList.toggle('is-active');
    mobileMenLinks.classList.toggle('active');
});

// display internal mobile menu
mobileMenInt.addEventListener('click', mobileMenu = () => {
    mobileMen.classList.toggle('is-active');
    mobileMenInt.classList.toggle('is-active');
    mobileMenLinks.classList.toggle('active');
});
