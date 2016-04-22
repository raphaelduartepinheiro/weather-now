// var square = document.querySelector('#js-square');
// new mojs.Tween({
//   repeat:   999,
//   delay:    2000,
//   onUpdate: function (progress) {
//     square.style.transform = 'translateY(' + 200*progress + 'px)';
//   }
// }).run();

function draw(weather){

}

function processMeaning(id){
  if (id >= 200 && id <= 232)
    return 'thunder'
  else if (id >= 300 && id <= 321)
    return 'drizzle'
  else if (id >= 500 && id <= 531)
    return 'rain'
  else if (id >= 600 && id <= 622)
    return 'snow'
  else if (id >= 701 && id <= 781)
    return 'atmosphere'
  else if (id === 800)
    return 'clear'
  else if (id >= 900 && id <= 906)
    return 'extreme'
  else
    return 'additional';
}

function send(event){
  if (event.keyCode === 13){
    var city = encodeURI($('.city').val());

    $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=44db6a862fba0b067b1930da0d769e98',
      dataType: 'json',
      success: function(data){
        if (data.cod === 200)
          $('.forecast').text(data.weather[0].main);
        else
          $('.forecast').text('City not found :(');
      }
    });  
  }
}

$(function(){

  console.log('vivo');

  // $('.loading').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
  //   $(this).removeClass('loading');
  //   $(this).addClass('red');
  //   $('.red').addClass('loading');
  //   console.log('acabou');
  // });
  
})