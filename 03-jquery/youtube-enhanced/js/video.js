// Add Youtube thumbnail images to each of the Youtube links on the page.

var $links = $('a');

// Add a thumbnail to each link.
$links.each(function () {
  var $link = $( this );

  var video = $link.attr('href');
  var thumbnailURL = youtube.generateThumbnailUrl(video);

  $('<img>').attr('src', thumbnailURL).appendTo($link);
});

// for (var i = 0; i < $links.length; i++) {

//   var $link = $links.eq(i);
//   var video = $link.attr('href');

//   var thumbnailURL = youtube.generateThumbnailUrl(video);

//   var $thumbnail = $('<img>');
//   $thumbnail.attr('src', thumbnailURL);

//   $link.append($thumbnail);

// }

