
var fetchBrother = function () {

  var client = new XMLHttpRequest();

  client.onreadystatechange = function () {
    if (client.readyState !== 4) {
      return; // responseText is still being loaded.
    }

    var content = document.getElementById('content');
    content.innerHTML += client.responseText;
  };

  client.open('GET', '/brother.txt?' + Math.random());

  client.send(); // ASYNC!
};

setInterval(fetchBrother, 4000);