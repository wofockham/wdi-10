var app = app || {};

// Setting up our models (as we might do in Rails).
app.Post = Backbone.Model.extend({
  defaults: {
    title: 'Untitled',
    content: 'This space for rent'
  }
});
