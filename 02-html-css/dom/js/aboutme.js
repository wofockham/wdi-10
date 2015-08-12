var bodyNode = document.getElementsByTagName('body')[0];
bodyNode.style.fontFamily = 'Arial, sans-serif';

var nickNode = document.getElementById('nickname');
nickNode.innerHTML = 'crodhead';

document.getElementById('favorites').innerHTML = 'death metal';

document.getElementsByTagName('span')[2].innerHTML = 'Sydney';

/*
Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
*/

var listItems = document.getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) {
  listItems[i].className = 'listitem';
}



var image = document.createElement('img');
image.src = 'http://fillmurray.com/400/400';

bodyNode.appendChild(image);
