$(document).ready(function () {

  $('h2').funText(500, 'rainbow');

  // Add Youtube thumbnail images to each of the Youtube links on the page.

  var thumbnailify = function (link) {
    var $link = $( link ); // jQuerify the link node.

    var video = $link.attr('href');
    var thumbnailURL = youtube.generateThumbnailUrl(video);

    $('<img>').attr('src', thumbnailURL).appendTo($link);

    $link.on('click', function (e) {
      e.preventDefault(); // Don't follow the link, we will play the video ourselves.

      var embedURL = youtube.generateEmbedUrl(video);

      var iframe = $('<iframe width="420" height="315" frameborder="0" allowfullscreen></iframe>');
      iframe.attr('src', embedURL);

      $('#video').hide().html(iframe).fadeIn(2000);

    });
  };

  var $links = $('a');

  // Add a thumbnail to each link.
  $links.each(function () {
    thumbnailify(this);
  });

  debugger;

});