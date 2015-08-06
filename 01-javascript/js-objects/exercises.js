// The Recipe Card

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

var hotdogRecipe = {
  title: 'Hotdogs',
  servings: 1,
  ingredients: ['hotdog buns', 'frankfurters', 'relish', 'onions', 'cheese', 'mustard']
};

var recipePrinter = function (recipe) {
  console.log(recipe.title);
  console.log('Servings: ', recipe.servings);

  console.log('Ingredients:');

  for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
  }
}

recipePrinter(hotdogRecipe);

// The Reading List

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var readingList = [
  {title: 'Catch-22', author: 'Joseph Heller', alreadyRead: true},
  {title: '50 Shades of Grey', author: 'Some Asshole', alreadyRead: false},
  {title: 'Voss', author: 'Patrick White', alreadyRead: true}
];

for (var i = 0; i < readingList.length; i++) {
  var book = readingList[i];
  if (book.alreadyRead === true) {
    console.log("You already read " + book.title + ' by ' + book.author);
  } else {
    console.log("You still need to read " + book.title + ' by ' + book.author);
  }
}

// The Movie Database

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var movie = {
  title: "O Brother! Where Art Thou?",
  duration: 107,
  stars: ['George Clooney', 'John Tutturo', 'That Slinty Little Guy']
};

var movieFormatter = function (m) {
  // var info = m.title + ' lasts for ' + m.duration + ' minutes.';
  // info += ' Stars: ' + m.stars.join(', ');

  var info = [
    m.title,
    'lasts for',
    m.duration,
    'minutes.',
    'Stars:',
    m.stars.join(', ')
  ].join(' ');

  console.log(info);
};

movieFormatter(movie);














