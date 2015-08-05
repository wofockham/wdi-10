// Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."

var choices = [ 'spork', 'splade', 'teaspoons', 'dessert spoons', 'knife', 'fork' ];

for (var j = 0; j < choices.length; j++) {
  console.log("My #" + (1 + j) + " choice is " + choices[j]);
}
