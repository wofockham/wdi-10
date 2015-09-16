var displayResults = function (photos) {
  for (var i = 0; i < photos.length; i++) {
    displayPhoto( photos[i] );
  }
};

var displayPhoto = function (photo) {
  var url = [
    'https://farm',
    photo.farm,
    '.staticflickr.com/',
    photo.server,
    '/',
    photo.id,
    '_',
    photo.secret,
    '_m.jpg'
  ].join('');

  var $img = $('<img>').attr('src', url);

  $img.appendTo('#results');

};

var searchFlickr = function (query) {
  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrUrl, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    format: 'json'
  }).done(function (result) {
    var photos = result.photos.photo; // This API gives us a weird nested object of results.
    displayResults(photos);
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {

    event.preventDefault();

    var query = $('#query').val();
    searchFlickr(query);

  });

  $(window).on('scroll', function () {
    console.log('doc height:', $(document).height(),
      'win height:', $(window).height(),
      'scrollTop:', $(window).scrollTop(),
      'win + scrollTop:', $(window).height() + $(window).scrollTop()
    );
  });
});
