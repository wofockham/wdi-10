var app = app || {};

app.PostListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'showPost'
  },
  render: function () {
    var postListTemplate = $('#postListView').html();
    var postListHTML = _.template(postListTemplate);
    var postList = postListHTML( this.model.toJSON() );

    this.$el.html(postList);

    this.$el.appendTo('#posts');
  },
  showPost: function () {
    // When a post is clicked, we navigate to that page via the router.
    app.router.navigate('posts/' + this.model.get('id'), true);
  }
});
