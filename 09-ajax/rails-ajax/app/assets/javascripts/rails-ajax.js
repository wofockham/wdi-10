$(document).ready(function () {
  var getTime = function () {
    $('#time').load('/time');
  };

  // setInterval(getTime, 3000);

  var getNumber = function () {
    $.ajax({
      url: '/lucky'
    }).done(function (result) {
      $('#lucky_numbers').append( result + ', ');
    });
  };

  $('#fetch_number').on('click', getNumber);

  var getInfo = function () {
    $.ajax({
      url: '/info'
    }).done(function (result) {
      $('#time').text( result['time'] );
    }).done(function (result) {
      $('#uptime').text( result['uptime'] );
    }).done(function (result) {
      $('#lucky_numbers').append( result['lucky_number'] + ', ');
    });
  };

  setInterval(getInfo, 3000);
});









