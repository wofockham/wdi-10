// Searches OMDB for a film title and displays its poster.
var searchOMDB = function (event) {
  event.preventDefault(); // Prevent the usual form submission.

  var client = new XMLHttpRequest();

  // This callback is fired every time the readyState changes, from 0 through to 4.
  client.onreadystatechange = function () {
    if (client.readyState !== 4) {
      return; // responseText isn't available until the readyState reaches 4, so we give up.
    }

    // If we didn't abort, readyState must now be 4 so we can proceed...

    // Convert the JSON string from OMDB into an actual JS object.
    var info = JSON.parse(client.responseText);

    // Gather the elements we'll be updating into variables.
    var title = document.getElementById('title');
    var poster = document.getElementById('poster');
    var plot = document.getElementById('plot');
    var bg = document.getElementById('bg');

    // Handle whether or not the poster was found.
    if (! info['Poster']) {
      // No such movie.
      title.innerHTML = 'Poster not found';
      title.className = 'error';
      plot.innerHTML = '';
      poster.removeAttribute('src');
      bg.style.backgroundImage = '';
    } else {
      // Info is ready to display.
      title.innerHTML = info['Title'];
      title.className = '';
      plot.innerHTML = info['Plot'];
      poster.setAttribute('src', info['Poster']);
      bg.style.backgroundImage = ['url(', info['Poster'], ')'].join('');
    }
  };

  // Retrieve the title and fire off a request.
  var titleInput = document.getElementById('search_title');
  var url = 'http://omdbapi.com/?t=' + encodeURIComponent(titleInput.value);
  titleInput.value = '';
  titleInput.focus;

  client.open('GET', url);
  client.send();
};

// Search whenever the user submits the form.
var searchForm = document.getElementById('search');
searchForm.addEventListener('submit', searchOMDB);
