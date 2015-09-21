var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var appViewTemplate = $('#appViewTemplate').html();
    this.$el.html( appViewTemplate );

    var secretInput = new app.SecretInputView();
    secretInput.render();
  }
});