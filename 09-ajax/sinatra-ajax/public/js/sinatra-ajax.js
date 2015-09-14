// Function to retrieve and display a bunch of live data from the server.
var getInfo = function () {

  var client = new XMLHttpRequest(); // A new AJAX client, please.

  // The callback function that will eventually process and display the results.
  client.onreadystatechange = function () {
    if (client.readyState !== 4) { // responseText isn't available until readyState == 4
      return; // So don't do anything until then.
    }

    var info = JSON.parse(client.responseText); // Turn the server's string into a JS object

    // Update various page elements with the data from the object.
    var p = document.getElementById('time');
    p.innerHTML = info['time'];

    var p = document.getElementById('lucky_numbers');
    p.innerHTML += info['lucky_number'] + ', ';

    var p = document.getElementById('uptime');
    p.innerHTML = info['uptime'];

  };

  client.open('GET', '/info'); // Set up where this AJAX request is pulling from.
  client.send(); // Initiate the request. Remember this is asynchronous!
};

setInterval(getInfo, 4000);

// var getTime = function () {
//   var client = new XMLHttpRequest();

//   client.onreadystatechange = function () {
//     if (client.readyState !== 4) {
//       return;
//     }

//     var p = document.getElementById('time');
//     p.innerHTML = client.responseText;
//   };

//   client.open('GET', '/time');
//   client.send();
// };

// setInterval(getTime, 3000);

var getNumber = function () {
  var client = new XMLHttpRequest();

  client.onreadystatechange = function () {
    if (client.readyState !== 4) {
      return;
    }

    var p = document.getElementById('lucky_numbers');
    p.innerHTML += client.responseText + ', ';
  };

  client.open('GET', '/lucky');

  client.send();
};

var button = document.getElementById('fetch_number');
button.addEventListener('click', getNumber);
