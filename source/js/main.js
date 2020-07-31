'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var headerTours = document.querySelector('.page-header__tours');
  var headerMenu = document.querySelector('.page-header__menu');
  var headerTop = document.querySelector('.page-header__top-block');
  var openButton = document.querySelector('.page-header__toggle--open');
  var closeButton = document.querySelector('.page-header__toggle--close');
  var mobileLogo = document.querySelector('.page-header__logo-white');
  var logo = document.querySelector('.page-header__logo');
  var logoPath = mobileLogo.querySelectorAll('path');
  var closeMenu = function () {
    logo.style.display = 'block';
    logoPath.forEach(function (item) {
      item.style.fill = '#f9fbfd';
    });
    headerMenu.classList.add('visually-hidden');
    closeButton.classList.remove('page-header__toggle--close');
    closeButton.classList.add('page-header__toggle--open');
    openButton.style.display = 'block';
    headerTop.style.backgroundColor = 'transparent';
    closeButton.addEventListener('click', openMenu);
    closeButton.removeEventListener('click', closeMenu);
  };
  var openMenu = function () {
    headerTop.style.backgroundColor = '#e5e5e5';
    headerMenu.classList.remove('visually-hidden');
    openButton.style.display = 'none';
    closeButton.style.display = 'block';
    closeButton.removeAttribute('disabled');
    closeButton.classList.remove('visually-hidden');
    closeButton.classList.add('page-header__toggle--close');
    closeButton.addEventListener('click', closeMenu);
    logoPath.forEach(function (item) {
      item.style.fill = '#011c40';
    });
    closeButton.removeEventListener('click', openMenu);
  };
  var activateJS = function () {
    header.classList.add('page-header--activeJS');
    headerTours.classList.add('page-header__tours--activeJS');
    openButton.removeAttribute('disabled');
    headerMenu.style.backgroundColor = 'transparent';
    headerTop.style.backgroundColor = 'transparent';
    headerMenu.classList.add('visually-hidden');
    logo.style.display = 'block';
    logoPath.forEach(function (item) {
      item.style.fill = '#f9fbfd';
    });
    closeButton.classList.remove('page-header__toggle--close');
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
      header.classList.remove('page-header--activeJS');
      headerTours.classList.remove('page-header__tours--activeJS');
      headerTop.style.backgroundColor = 'transparent';
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

(function () {
  var elements = document.querySelectorAll('#tel');
  for (var i = 0; i < elements.length; i++) {
    new IMask(elements[i], {
      mask: '00000000000',
    });
  }
})();
