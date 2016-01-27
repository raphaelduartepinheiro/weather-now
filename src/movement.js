// var square = document.querySelector('#js-square');
// new mojs.Tween({
//   repeat:   999,
//   delay:    2000,
//   onUpdate: function (progress) {
//     square.style.transform = 'translateY(' + 200*progress + 'px)';
//   }
// }).run();

$.ajax({
  type: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Curitiba&appid=44db6a862fba0b067b1930da0d769e98',
  dataType: 'json',
  success: function(data){
    $('.forecast').text(data.weather[0].main);
  }
});