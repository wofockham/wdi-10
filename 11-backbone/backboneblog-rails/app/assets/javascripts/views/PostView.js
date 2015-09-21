var app = app || {};

app.PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postTemplate = $('#postView').html();
    var postHTML = _.template(postTemplate);
    var post = postHTML( this.model.toJSON() );
    this.$el.html(post);
  }
});
