var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: '/secrets',
  model: app.Secret
});
