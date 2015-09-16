var numbers = [];
var spewTimer = null;

var startSpew = function () {
  clearInterval(spewTimer);
  spewTimer = setInterval(function () {
    var n = _.random(1, 1000);
    numbers.push(n);
    addBox(n);
  }, 100);
};

var stopSpew = function () {
  clearInterval(spewTimer);
};

var addNumber = function () {
  var n = parseInt( $('#number').val() );
  numbers.push( n );

  addBox(n);

  $('#number').val('').focus();
};

var squareNumbers = function () {
  numbers = _(numbers).map(function (i) { return i * i });
  displayNumbers();
};

var addBox = function (n) {
  var $box = $('<div/>').addClass('box').text( n );
  $box.prependTo('#numbers');
};

var displayNumbers = function () {
  $('#numbers').empty();
  _(numbers).each(addBox);
};

$(document).ready(function () {
  $('#add_number').on('click', addNumber);
  $('#square').on('click', squareNumbers);
  $('#start').on('click', startSpew);
  $('#stop').on('click', stopSpew);
});









