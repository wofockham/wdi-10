var app = app || {};

// This collection has the magical ability to render new secrets whenever they are
// added, via .fetch() ("AJAX") or .add() ("manually").

// More on custom Backbone events: http://backbonejs.org/#Events-catalog

app.Secrets = Backbone.Collection.extend({
  url: '/secrets',
  model: app.Secret,
  initialize: function () {
    // It turns out this is the only place we need to render secrets.
    this.on('add', function (secret) {
      var secretView = new app.SecretView({model: secret});
      secretView.render();
    });
  }
});
