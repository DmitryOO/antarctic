'use strict';

(function () {
  var headerMenu = document.querySelector('.page-header__menu');
  var header = document.querySelector('.page-header__top-block');
  var openButton = document.querySelector('.page-header__toggle--open');
  var closeButton = document.querySelector('.page-header__toggle--close');
  var mobileLogo = document.querySelector('.page-header__logo--mobile-menu');
  var logo = document.querySelector('.page-header__logo');
  var closeMenu = function () {
    logo.style.display = 'block';
    mobileLogo.style.display = 'none';
    headerMenu.classList.add('visually-hidden');
    openButton.style.display = 'block';
    closeButton.style.display = 'none';
    header.style.backgroundColor = 'transparent';
    closeButton.setAttribute('disabled', 'disabled');
  };
  var openMenu = function () {
    header.style.backgroundColor = '#e5e5e5';
    headerMenu.classList.remove('visually-hidden');
    openButton.style.display = 'none';
    closeButton.style.display = 'block';
    closeButton.removeAttribute('disabled');
    closeButton.classList.remove('visually-hidden');
    closeButton.addEventListener('click', closeMenu);
    logo.style.display = 'none';
    mobileLogo.style.display = 'block';
  };
  var activateJS = function () {
    openButton.removeAttribute('disabled');
    headerMenu.style.backgroundColor = 'transparent';
    header.style.backgroundColor = 'transparent';
    headerMenu.classList.add('visually-hidden');
    logo.style.display = 'block';
    mobileLogo.style.display = 'none';
    openButton.style.display = 'block';
    openButton.addEventListener('click', openMenu);
  };
  if (window.innerWidth < 768) {
    activateJS();
  }
  var onResizeJS = function () {
    if (window.innerWidth < 768) {
      activateJS();
    } else {
      header.style.backgroundColor = 'transparent';
      headerMenu.classList.remove('visually-hidden');
      headerMenu.style.display = 'flex';
      openButton.style.display = 'none';
      closeButton.style.display = 'none';
      closeButton.setAttribute('disabled', 'disabled');
      openButton.setAttribute('disabled', 'disabled');
    }
  };
  window.addEventListener('resize', onResizeJS);
})();

