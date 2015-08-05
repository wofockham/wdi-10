// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var fortune = function (numChildren, partnerName, geoLocation, jobTitle) {
  var message = "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numChildren + " kids.";

  console.log(message);
};

fortune(400, 'Wayne', 'Tahiti', 'Furniture Polisher');


var ageCalculator = function (birthYear) {
  var currentYear = (new Date()).getFullYear();
  var firstAge = currentYear - birthYear;
  var secondAge = firstAge - 1;

  var message = 'They are either ' + firstAge + ' or ' + secondAge;
  console.log(message);
};

ageCalculator(1990);


var lifetimeSupply = function (currentAge, perDay) {
  var maximumAge = 74;
  var perYear = perDay * 365.25; // Including leap years.
  var yearsRemaining = maximumAge - currentAge;
  var amountRequired = perYear * yearsRemaining;

  amountRequired = Math.ceil(amountRequired);

  var message = "You will need " + amountRequired + " to last you until the ripe old age of " + maximumAge;

  console.log(message);
};

lifetimeSupply(47, 25.3);

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".

var calcCircumference = function (radius) {
  var result = 2 * Math.PI * radius;
  console.log('The circumference is ' + result);
};

calcCircumference(15);

// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

var calcArea = function (radius) {
  var result = Math.PI * radius * radius;
  console.log('The area is ' + result);
};

calcArea(15);


// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

var celsiusToFahrenheit = function (celsius) {
  var fahrenheit = celsius * 1.8 + 32;
  console.log(celsius + "°C is " + fahrenheit + "°F");
};

celsiusToFahrenheit(11.2);

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var fahrenheitToCelsius = function (fahrenheit) {
  var celsius = (fahrenheit - 32) / 1.8;
  console.log(fahrenheit + "°F is " + celsius + "°C.");
};

fahrenheitToCelsius(52.16);
