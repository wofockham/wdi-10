// Add Youtube thumbnail images to each of the Youtube links on the page.

var links = document.querySelectorAll('a');

for (var i = 0; i < links.length; i++) {

  var link = links[i];
  var video = link.getAttribute('href');

  var thumbnailURL = youtube.generateThumbnailUrl(video);

  var thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', thumbnailURL);

  link.appendChild(thumbnail);

}

