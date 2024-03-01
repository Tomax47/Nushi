/*=============== SHOW MENU ===============*/
console.log(`JS LINKED`);
const navMenu = document.getElementById(`nav-menu`),
      navToggle = document.getElementById(`nav-toggle`),
      navClose = document.getElementById(`nav-close`)

/* ==== MENU SHOW ==== */
// Validate if constant exists 
if(navToggle) {
    navToggle.addEventListener(`click`, () => {
        console.log(`Clicked show`);
        navMenu.classList.add(`show-menu`)
    })
}

/* ==== MENU HIDDEN ==== */
// Validate if constant exists 
if(navClose) {
    navClose.addEventListener(`click`, () => {
        console.log(`Clicked close`);
        navMenu.classList.remove(`show-menu`)
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.getElementById(`.nav__link`);

const linkAction = () => {
    const navMenu = document.getElementById(`nav-menu`)
    // When clicking on each nav__link, we remove the show-menu element
    navMenu.classList.remove(`show-menu`)
}

 
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById(`header`)
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    this.scrollY >= 50 ? header.classList.add(`bg-header`)
                       : header.classList.remove(`bg-header`);
}

window.addEventListener(`scroll`, scrollHeader);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    console.log(`scrollUp working!`)
    const scrollUp = document.getElementById(`scroll-up`)
    // When the scroll is higher than 350 viewpoint height, add the show-scroll class to the <a> tag
    this.scrollY >= 800 ? scrollUp.style = 'visibility: visible;'
                        : scrollUp.style = 'visibility: hidden;';

    // this.scrollY >= 350 ? scrollUp.classList.add(`show-scroll`)
    //                     : scrollUp.classList.remove(`show-scroll`);
}

window.addEventListener(`scroll`, scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll(`section[id]`);

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute(`id`),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }

    });
}

window.addEventListener(`scroll`, scrollActive);

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById(`theme-button`);
const darkTheme = `dark-theme`;
const iconTheme = `ri-sun-line`;

const selectedTheme = localStorage.getItem(`selected-theme`);
const selectedIcon = localStorage.getItem(`selected-icon`);

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon == 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener(`click`, () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme);
    localStorage.setItem('selected-icon', getCurrentIcon);
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true // Animations repeat 
})

sr.reveal(`.home__img, .home__title,.newsletter__container, .footer__logo, 
            .footer__description, .footer__content, .footer__info`)
sr.reveal(`.home__date`, {origin: 'bottom'})
sr.reveal(`.about__data, .recently__data`, {origin: 'left'})
sr.reveal(`.about__img, .recently__img`, {origin: 'right'})
sr.reveal(`.popular__card`, {interval: 100})