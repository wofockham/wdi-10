// Setting up our models (as we might do in Rails).
var Post = Backbone.Model.extend({
  defaults: {
    title: 'Untitled',
    content: 'This space for rent'
  }
});

// The posts collection is similar to an ActiveRecord collection.
// It has additional methods such as pluck() and get() which arrays lack.
// See docs for the additional underscore methods available.
var Posts = Backbone.Collection.extend({
  model: Post
});

// seeds.rb
// (Later we will see how to retrieve these posts from a Rails database).
var blogPosts = new Posts([
  new Post({id: 1, title: 'Post 1', content: 'Content of first post'}),
  new Post({id: 2, title: 'Post 2', content: 'Different content of the second post'}),
  new Post({id: 3, title: 'Literally anything', content: 'Any old content'}),
  new Post({id: 4, title: 'Fourth post', content: 'More bullshit goes here.'})
]);


// Views have a render() method to actually display something on the screen.
// They should also keep track of any events that apply to them.
var AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    // Set up the main app view with HTML from the template.
    var html = $('#appView').html();
    this.$el.html(html);

    // Create a new view within the app view for each blog post.
    this.collection.each(function (post) {
      // Instantiate a new view for each model, and associate them.
      var postListView = new PostListView({model: post});
      postListView.render();
    });
  }
});

var PostListView = Backbone.View.extend({
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
    router.navigate('posts/' + this.model.get('id'), true);
  }
});


var PostView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var postTemplate = $('#postView').html();
    var postHTML = _.template(postTemplate);
    var post = postHTML( this.model.toJSON() );
    this.$el.html(post);
  }
});

// The app listens for changes in the #hashfragment part of the URL and performs
// some "action" based on the pattern which is matched.
var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'viewPost',
    ':default': 'sendHome' // 404 page: if we can't match the URL redirect back home.
  },

  index: function () {
    var appView = new AppView({collection: blogPosts});
    appView.render();
  },

  viewPost: function (id) {
    var post = blogPosts.get(id);
    // Redirect back to the home page if the post is not found.
    if (! post) {
      router.navigate('', true);
    }
    var postView = new PostView({model: post});
    postView.render();
  },

  sendHome: function () {
    router.navigate('', true);
  }
});


// We wait for the document to be ready before starting the router,
// so all our views will have access to the DOM elements they need.
var router;
$(document).ready(function () {
  router = new AppRouter();
  Backbone.history.start();
});
