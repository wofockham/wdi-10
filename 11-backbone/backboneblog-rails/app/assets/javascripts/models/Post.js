var app = app || {};

// Setting up our models (as we might do in Rails).
app.Post = Backbone.Model.extend({
  urlRoot: '/posts', // Assume a RESTful CRUD API lives at /posts
  defaults: {
    title: 'Untitled',
    content: 'This space for rent'
  }
});
