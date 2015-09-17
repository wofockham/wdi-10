var paint = function (event) {
  if (event.shiftKey === false) {
    return;
  }
  var currentColor = $('.swatch.selected').css('background-color');
  $(this).css('background-color', currentColor);
};

var addSwatch = function () {
  var $color = $('#color');
  var color = $color.val();

  var $swatch = $('<div/>').addClass('swatch').css('background-color', color);
  $swatch.prependTo('.palette');
};

var prepareCanvas = function (n) {
  if (!n) {
    n = 3840; // default argument
  }
  $('.canvas').empty();
  for (var i = 0; i < n; i++) {
    $('<div/>').addClass('pixel').appendTo('.canvas');
  }
};

var clearCanvas = function () {
  $('.pixel').css('background-color', '');
};

var selectSwatch = function () {
  $('.selected').removeClass('selected');
  $(this).addClass('selected');
};

$(document).ready(function () {
  prepareCanvas();
  $('#add_color').on('click', addSwatch);
  $('#clear_canvas').on('click', clearCanvas);
  $('.palette').on('click', '.swatch', selectSwatch); // delegation!
  $('.canvas').on('mouseover', '.pixel', paint); // delegation for efficiency!
});
