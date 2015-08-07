// Horrible object free example:
// var names = ['Groucho', 'Harpo', 'Chico'];
// var instruments = ['guitar', 'harp', 'piano'];
// var vices = ['cigars', 'hijinx', 'women'];

// var crapBrotherPrinter = function (index) {
//   console.log(names[index] + ' plays the ' + instruments[index] + ' and enjoys ' + vices[index]);
// }

// crapBrotherPrinter(0);
// crapBrotherPrinter(2);


// Hand made artisinal object example:
var bros = [
  {name: 'Groucho', instrument: 'guitar', vice: 'cigars'},
  {name: 'Harpo', instrument: 'harp', vice: 'hijinx'},
  {name: 'Chico', instrument: 'piano', vice: 'women'}
];

printBrother = function (brother) {
  console.log( brother.name + ' plays the ' + brother.instrument + ' and enjoys ' + brother.vice);
}

printBrother(bros[1]);

for (var i = 0; i < bros.length; i++) {
  printBrother(bros[i]);
};

// Weird destructuring example:
var vices = {
  Groucho: 'cigars',
  harpo: 'hijinx',
  chico: 'women'
};

var instruments = {
  Groucho: 'guitar',
  harpo: 'harp',
  chico: 'piano'
}

var objectBrotherPrinter = function ( name ) {
  console.log( name + ' plays the ' + instruments[name] + ' and enjoys ' + vices[name]);
};

objectBrotherPrinter('Groucho');
objectBrotherPrinter('harpo');


// ___________              __               .__
// \_   _____/____    _____/  |_  ___________|__| ____   ______
//  |    __) \__  \ _/ ___\   __\/  _ \_  __ \  |/ __ \ /  ___/
//  |     \   / __ \\  \___|  | (  <_> )  | \/  \  ___/ \___ \
//  \___  /  (____  /\___  >__|  \____/|__|  |__|\___  >____  >
//      \/        \/     \/                          \/     \/

var brotherFactory = function (name, instrument, vice) {
  return {
    name: name,
    instrument: instrument,
    vice: vice,
    cross: function () {

    },
    play: function () {
      console.log( name + ' plays the ' + instrument)
    }
  };
};

var bros = [
  brotherFactory('Groucho', 'guitar', 'cigars'),
  brotherFactory('Harpo', 'harp', 'hijinx'),
  brotherFactory('Chico', 'piano', 'women')
];

console.log(bros);




//   ______ __  ______________ __ __ ____________ ____  __
//  // // \\||\ |(( \ || ||| \\|| ||//  | || // \\|| \\(( \
// (( ((   ))|\\||\\  ||  ||_//|| |((     ||((   ))|_// \\
//  \\_\\_//|| \|\_)) ||  || \\\\_//\\__  || \\_//|| \\\_))

var Brother = function (name, instrument, vice) {
  this.name = name;
  this.instrument = instrument;
  this.vice = vice;

  return this;
};

var g = new Brother('Groucho', 'guitar', 'cigars');
