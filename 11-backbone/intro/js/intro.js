// Model

var Animal = Backbone.Model.extend({
  defaults: {
    type: 'animal',
    ecosystem: '',
    stripes: 0
  },

  initialize: function () {
    console.log('a new wild animal appears!');

    this.on('change:type', function (model) {
      var type = model.get('type');
      console.log('I am now a', type);
    });
  }
});

// Collection

var Zoo = Backbone.Collection.extend({
  model: Animal
});

var animal1 = new Animal({type: 'giraffe', ecosystem: 'savannah'});
var animal2 = new Animal({type: 'zebra', ecosystem: 'savannah', stripes: 754});
var animal3 = new Animal({type: 'horse', ecosystem: 'prairies'});


var zoo = new Zoo([ animal1, animal2, animal3 ]);


// Views
// var theZoo = new ZooView({collection: animals})
var ZooView = Backbone.View.extend({
  el: '#main',

  events: {
    'mouseover h2': 'easterEgg',
    'click li': 'animalInfo'
  },

  initialize: function (options) {
    console.log('initializing ZooView');
    this.collection = options.collection;
  },

  render: function () {
    this.$el.html('<h2>Welcome to our Zoo</h2>');
    this.$el.append('<ul id="animals"/>');

    this.collection.each(function (model) {
      var $li = $('<li/>').text( model.get('type') );
      $li.appendTo('#animals');
    });
  },

  easterEgg: function () {
    this.$el.find('h2').hide().slideDown(4000);
  },

  animalInfo: function (event) {
    var name = $(event.target).text();
    alert('You clicked on ' + name);
  }
});


$(document).ready(function () {
  var zooView = new ZooView({collection: zoo});
  zooView.render();
});





























