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
var ZooView = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    console.log('initializing ZooView');
  },

  render: function () {
    this.$el.html('Welcome to our Zoo');
  }
});
































