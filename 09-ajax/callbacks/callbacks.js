$(document).ready(function () {
  console.log('This console.log() is inside of a callback');
});

setTimeout(function () {
  console.log('10 seconds have elapsed before this callback ran');
}, 10000);

$('#signup').on('click', function () {
  alert('You clicked the signup thingy!');
});

var paragraphRefiller = function () {
  $(this).text('This paragraph was changed by a callback');
};

$('p').each(paragraphRefiller);
