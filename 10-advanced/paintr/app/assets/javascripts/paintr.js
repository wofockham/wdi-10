var addSwatch = function () {
  var $color = $('#color');
  var color = $color.val();

  var $swatch = $('<div/>').addClass('swatch').css('background-color', color);
  $swatch.prependTo('.palette');
};

var prepareCanvas = function (n) {
  if (!n) {
    n = 5000; // default argument
  }
  $('.canvas').empty();
  for (var i = 0; i < n; i++) {
    $('<div/>').addClass('pixel').appendTo('.canvas');
  }
};

$(document).ready(function () {
  prepareCanvas();
  $('#add_color').on('click', addSwatch);
});
