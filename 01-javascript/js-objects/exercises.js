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
