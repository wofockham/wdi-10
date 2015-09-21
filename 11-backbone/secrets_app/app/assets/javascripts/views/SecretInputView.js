var app = app || {};

app.SecretInputView = Backbone.View.extend({
  el: '#secretForm',

  events: {
    'click button': 'createSecret',
    'keydown textarea': 'checkForEnter'
  },

  render: function () {
   var secretInputViewTemplate = $('#secretInputViewTemplate').html();
   this.$el.html(secretInputViewTemplate);
   this.$el.find('textarea').focus();
  },

  checkForEnter: function (event) {
    app.ENTER_KEY = 13;
    if (event.which === app.ENTER_KEY) {
      event.preventDefault(); // Don't stick the new line into the input.
      this.createSecret();
    }
  },

  createSecret: function () {
    var secret = new app.Secret();
    var content = this.$el.find('textarea').val();
    secret.set('content', content);
    secret.save();

    app.secrets.add(secret);

    this.$el.find('textarea').val('').focus();

  }
});