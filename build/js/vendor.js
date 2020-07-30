'use strict';

var elements = document.querySelectorAll('#tel');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '00000000000',
  });
}
