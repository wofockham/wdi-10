$('h1').on('mousemove', function (event) {
  console.log('Event info', event);
});

$('form').on('submit', function (event) {
  event.preventDefault();
});

$('a').on('click', function (event) {
  events.preventDefault();
});
