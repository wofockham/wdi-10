var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function () {
    var appView = new app.AppView({collection: app.secrets});
    appView.render();
  }
});