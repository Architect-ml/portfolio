$(function () {
  // Smooth scroll
  $(".menu a, .hero a, .footer a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

  // Add an image filter 'Mix it Up'
  var mixer = mixitup(portfolioContent, {
    classNames: {
      block: 'portfolio',
      delineatorElement: '__',
      elementFilter: 'btn',
      delineatorModifier: '--',
    },
    animation: {
      'duration': 500,
      'nudge': true,
      'reverseOut': false,
    }
  });
});

// Add fixed 'header' on scroll
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  const headerFixed = () => {
    let scrollTop = window.scrollY;

    if (scrollTop) {
      header.classList.add('header--fixed');
    } else {
      header.classList.remove('header--fixed');
    }
  };
  headerFixed();
  window.addEventListener('scroll', () => {
    headerFixed();
  });
});

// Add classes for mobile menu 
const menuButton = document.querySelector('.menu__button');
const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');
const body = document.body;

const toggleMenu = () => {
  menuButton.classList.toggle('menu__button--active');
  menuList.classList.toggle('menu__list--active');
  body.classList.toggle('disable-scroll');

  if (menuList.classList.contains('menu__list--active')) {
    menuButton.setAttribute('aria-label', 'Закрити меню');
    menuButton.setAttribute('aria-expanded', 'true');
  } else {
    menuButton.setAttribute('aria-label', 'Відкрити меню');
    menuButton.setAttribute('aria-expanded', 'false');
  }
};

menuButton.addEventListener('click', () => {
  toggleMenu();
});

menuLink.forEach(link => {
  link.addEventListener('click', () => {
    menuButton.classList.remove('menu__button--active');
    menuList.classList.remove('menu__list--active');
    body.classList.remove('disable-scroll');
  });
});