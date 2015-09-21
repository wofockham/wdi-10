var app = app || {};

_.templateSettings = {
   evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
   interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

// seeds.rb
// (Later we will see how to retrieve these posts from a Rails database).
app.blogPosts = new app.Posts([
  new app.Post({id: 1, title: 'Post 1', content: 'Content of first post'}),
  new app.Post({id: 2, title: 'Post 2', content: 'Different content of the second post'}),
  new app.Post({id: 3, title: 'Literally anything', content: 'Any old content'}),
  new app.Post({id: 4, title: 'Fourth post', content: 'More bullshit goes here.'})
]);

// We wait for the document to be ready before starting the router,
// so all our views will have access to the DOM elements they need.
$(document).ready(function () {
  app.router = new app.AppRouter();
  Backbone.history.start();
});
