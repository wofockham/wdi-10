var app = app || {};

app.SecretView = Backbone.View.extend({
  tagName: 'li',
  render: function () {
    this.$el.text( this.model.get('content') );
    this.$el.prependTo('#secrets');
  }
});