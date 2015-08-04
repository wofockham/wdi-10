console.log('Is this thing on?');

// Exercise 1: Fortune Teller
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numChildren = 7;
var partnerName = 'Craigsy';
var geoLocation = 'Tahiti';
var jobTitle = 'Window cleaner';

var fortune = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + numChildren + ' kids';

console.log( fortune );

// Exercise 2: Age Calculator
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2015;
var birthYear = 1990;
var firstAge = currentYear - birthYear;
var secondAge = firstAge - 1;

var message = 'They are either ' + firstAge + ' or ' + secondAge;
console.log(message);

// Exercise 3: Lifetime Supply Calculator
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 47;
var maximumAge = 74;
var perDay = 25;

var perYear = perDay * 365.25; // Including leap years.
var yearsRemaining = maximumAge - currentAge;
var amountRequired = perYear * yearsRemaining;

var message = "You will need " + amountRequired + " to last you until the ripe old age of " + maximumAge;

console.log(message);

// Exercise 4: The Geometrizer
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 15;
var circumference = 2 * Math.PI * radius;
console.log('The circumference is ' + circumference);
var area = Math.PI * radius * radius;
console.log('The area is ' + area);

// Exercise 5: Temperature Convertor
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
var celsiusTemp = 11.6;
var fahrenheitTemp = celsiusTemp * 1.8 + 32;
console.log(celsiusTemp + "°C is " + fahrenheitTemp + "°F");
var celsiusTemp = (fahrenheitTemp - 32) / 1.8;
console.log(fahrenheitTemp + "°F is " + celsiusTemp + "°C.");












