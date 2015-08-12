var makeMadLib = function () {
  var noun = document.getElementById('noun').value;
  var adj = document.getElementById('adjective').value;
  var name = document.getElementById('person').value;

  var story = [name, 'really likes', adj, noun].join(' ');
  document.getElementById('story').innerHTML = story;

};

var libItButton = document.getElementById('lib-button');
libItButton.addEventListener('click', makeMadLib);