var square = document.querySelector('#js-square');
new mojs.Tween({
  repeat:   999,
  delay:    2000,
  onUpdate: function (progress) {
    square.style.transform = 'translateY(' + 200*progress + 'px)';
  }
}).run();