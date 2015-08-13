var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },

  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

var bodyNode = document.getElementsByTagName('body')[0];
var list = document.createElement('ul');

for (var i = 0; i < books.length; i++) {
  var book = books[i];

  var listItem = document.createElement('li');
  listItem.innerHTML = [book.title, 'by', book.author].join(' '); // alteratively: +

  list.appendChild(listItem);
}

bodyNode.appendChild(list);
