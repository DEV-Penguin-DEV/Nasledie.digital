import ScrollReveal from 'scrollreveal';
const mediaQuery1024 = window.matchMedia('(min-width: 1024px)');

ScrollReveal().reveal('.industry', {
  reset: true,
  scale: 1.4,
  duration: 1500,
});

ScrollReveal().reveal('.title--animation', {
  reset: true,
  distance: '350px',
  origin: 'left',
  duration: 1000,
});

ScrollReveal().reveal('.title--text', {
  reset: true,
  distance: '350px',
  origin: 'right',
  duration: 1000,
});

ScrollReveal().reveal('.do-more__item--active', {
  reset: true,
  distance: '350px',
  origin: 'right',
  duration: 1000,
  delay: 1000,
});

ScrollReveal().reveal('.do-more-bg__map', {
  reset: true,
  scale: 1.4,
  duration: 1500,
});

ScrollReveal().reveal('.do-more-bg__img', {
  reset: true,
  scale: 2,
  duration: 1700,
  delay: 600,
});

ScrollReveal().reveal('.main-footer__container-animation', {
  reset: true,
  origin: 'bottom',
  distance: '500px',
  duration: 1500,
});

ScrollReveal().reveal('.first-screen__logo', {
  reset: true,
  scale: 1.4,
  duration: 2500,
});

ScrollReveal().reveal('.first-screen__text', {
  reset: true,
  origin: 'bottom',
  distance: '300px',
  duration: 2500,
});

ScrollReveal().reveal('.project-description__title', {
  reset: true,
  scale: 1.4,
  duration: 1500,
});

ScrollReveal().reveal('.project-description__text', {
  reset: true,
  origin: 'bottom',
  distance: '300px',
  duration: 1500,
});

if(mediaQuery1024.matches) {
  ScrollReveal().reveal('.about__text', {
    reset: true,
    origin: 'right',
    distance: '300px',
    duration: 1500,
  });
} else {
  ScrollReveal().reveal('.about__text--1', {
    reset: true,
    origin: 'left',
    distance: '300px',
    duration: 2500,
  });

  ScrollReveal().reveal('.about__text--2', {
    reset: true,
    origin: 'right',
    distance: '300px',
    duration: 2500,
  });
}

ScrollReveal().reveal('.do-more__menu-item', {
  reset: true,
  scale: 1.6,
  duration: 1700,
});

ScrollReveal().reveal('.do-more__button', {
  reset: true,
  origin: 'bottom',
  distance: '200px',
  duration: 1500,
});

ScrollReveal().reveal('.offer__title', {
  reset: true,
  origin: 'left',
  distance: '200px',
  duration: 1500,
});

ScrollReveal().reveal('.offer__opportunity', {
  reset: true,
  origin: 'top',
  distance: '200px',
  duration: 1500,
});

ScrollReveal().reveal('.offer__price-animation-container', {
  reset: true,
  origin: 'bottom',
  distance: '200px',
  duration: 1500,
});

ScrollReveal().reveal('.pmo', {
  reset: true,
  scale: 1.5,
  duration: 1500,
});
