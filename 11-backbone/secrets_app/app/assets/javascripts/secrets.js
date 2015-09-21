var app = app || {};

_.templateSettings = {
   evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
   interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};


// We wait for the document to be ready before starting the router,
// so all our views will have access to the DOM elements they need.
$(document).ready(function () {
  if ($('#main').length === 0) {
    return; // Don't start Backbone unless we're on a backbone compatible page.
  }

  app.secrets = new app.Secrets();
  app.secrets.fetch();

  setInterval(function () {
    app.secrets.fetch();
  }, 4000);

  app.router = new app.AppRouter();
  Backbone.history.start();
});
