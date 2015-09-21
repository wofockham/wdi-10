var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: '/secrets',
  model: app.Secret,
  initialize: function () {
    this.on('add', function (secret) {
      console.log('secret added');
      var secretView = new app.SecretView({model: secret});
      secretView.render();
    });
  }
});
