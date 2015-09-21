var app = app || {};

// The posts collection is similar to an ActiveRecord collection.
// It has additional methods such as pluck() and get() which arrays lack.
// See docs for the additional underscore methods available.
app.Posts = Backbone.Collection.extend({
  model: app.Post
});