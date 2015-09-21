var app = app || {};

_.templateSettings = {
   evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
   interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};


// We wait for the document to be ready before starting the router,
// so all our views will have access to the DOM elements they need.
$(document).ready(function () {
  app.secrets = new app.Secrets();
  app.secrets.fetch().done(function () {
    app.router = new app.AppRouter();
    Backbone.history.start();
  });
});
