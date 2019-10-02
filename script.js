'use strict';

var overlay = document.querySelector('.modal-overlay');
var link = document.querySelector('.login-link');

var popup = document.querySelector('.modal-login');
var close = popup.querySelector('.modal-close');

var form = popup.querySelector('form');
var login = popup.querySelector('[name=login]');
var password = popup.querySelector('[name=password]');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  overlay.classList.add('overlay-show');
  popup.classList.add('modal-show');

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
  overlay.classList.remove('overlay-show');
});

form.addEventListener('submit', function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    var fake = popup.offsetWidth; // Почему без этого не работает?
    var fake2 = fake;
    fake = fake2;
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', login.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    var currentPopup = document.querySelector('.modal-show');
    currentPopup.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
    if (currentPopup.classList.contains('modal-error')) {
      popup.classList.remove('modal-error');
    }
  }
});
var mapLinks = document.querySelectorAll('.jsMapLink');

var mapPopup = document.querySelector('.modal-map');
var mapClose = mapPopup.querySelector('.modal-close');

for (var i = 0; i < mapLinks.length; i++) {
  mapLinks[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
    overlay.classList.add('overlay-show');
  });
}


mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
});
