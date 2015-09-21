var app = app || {};

// Views have a render() method to actually display something on the screen.
// They should also keep track of any events that apply to them.
app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    // Set up the main app view with HTML from the template.
    var html = $('#appView').html();
    this.$el.html(html);

    // Create a new view within the app view for each blog post.
    this.collection.each(function (post) {
      // Instantiate a new view for each model, and associate them.
      var postListView = new app.PostListView({model: post});
      postListView.render();
    });
  }
});
