/////////////////////////////////////////////////////////////////////
// let -- block level scope
/////////////////////////////////////////////////////////////////////

var brotherPrinter = ()=> {
  var bros = ['groucho', 'harpo', 'chico'];

  for (var i = 0; i < bros.length; i++) {
    let brother = bros[i]; // This variable won't exist outside of this block.
    console.log(brother);
  }

  // console.log(brother); // brother is not defined here

};

brotherPrinter();


/////////////////////////////////////////////////////////////////////
// arrow function -- shorter function syntax
/////////////////////////////////////////////////////////////////////

var hello = () => {
  console.log('Hello from a short ES6 function');
}

hello();

// Great for one line anonymous functions, curlies are optional.
['Groucho', 'Harpo', 'Chico'].forEach(i => console.log(i));


/////////////////////////////////////////////////////////////////////
// default arguments
/////////////////////////////////////////////////////////////////////

var greeter = function (name='World') {
  console.log('Hello ' + name);
};

greeter();
greeter('Benji');


/////////////////////////////////////////////////////////////////////
// destructuring
/////////////////////////////////////////////////////////////////////
var bros = ['groucho', 'harpo', 'chico'];

var [first, second, third] = bros;

console.log(third, second, first);

