var app = app || {};

// The app listens for changes in the #hashfragment part of the URL and performs
// some "action" based on the pattern which is matched.
app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'viewPost',
    ':default': 'sendHome' // 404 page: if we can't match the URL redirect back home.
  },

  index: function () {
    var appView = new app.AppView({collection: app.blogPosts});
    appView.render();
  },

  viewPost: function (id) {
    var post = app.blogPosts.get(id);
    // Redirect back to the home page if the post is not found.
    if (! post) {
      app.router.navigate('', true);
    }
    var postView = new app.PostView({model: post});
    postView.render();
  },

  sendHome: function () {
    app.router.navigate('', true);
  }
});
