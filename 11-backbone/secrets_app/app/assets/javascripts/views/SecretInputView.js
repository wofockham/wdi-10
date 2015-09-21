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

  // Users can submit new secrets by simply hitting enter.
  checkForEnter: function (event) {
    app.ENTER_KEY = 13;
    if (event.which === app.ENTER_KEY) {
      event.preventDefault(); // Don't stick the new line into the textarea.
      this.createSecret();
    }
  },

  createSecret: function () {
    var secret = new app.Secret();
    var content = this.$el.find('textarea').val();
    secret.set('content', content);
    secret.save();

   // Don't forget .add() will trigger the 'add' event on the collection and so render
   // the new secret!
    app.secrets.add(secret);

    this.$el.find('textarea').val('').focus();
  }
});