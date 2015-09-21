var app = app || {};

// We replace the ERB style tags with Mustache.js style syntax, to prevent conflict
// with the ERB tags in Rails.
_.templateSettings = {
   evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
   interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

// We wait for the document to be ready before starting the router,
// so all our views will have access to the DOM elements they need.
$(document).ready(function () {
  if ($('#main').length === 0) {
    return; // Don't start Backbone unless we're on a Backbone compatible page.
  }

  app.secrets = new app.Secrets();
  // This will trigger the 'add' event on the collection to render the secrets once loaded.
  app.secrets.fetch();

  // Poll the server for new secrets every 4 seconds.
  setInterval(function () {
    app.secrets.fetch();
  }, 4000);

  app.router = new app.AppRouter();
  Backbone.history.start();
});
