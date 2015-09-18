var Post = Backbone.Model.extend({
  defaults: {
    title: 'Untitled',
    content: 'This space for rent'
  }
});

var Posts = Backbone.Collection.extend({
  model: Post
});

// seed.rb
var blogPosts = new Posts([
  new Post({id: 1, title: 'Post 1', content: 'Content of first post'}),
  new Post({id: 2, title: 'Post 2', content: 'Different content of the second post'}),
  new Post({id: 3, title: 'Third post', content: 'Any old content'}),
  new Post({id: 4, title: 'Fourth post', content: 'More bullshit goes here.'})
]);

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'viewPost'
  },

  index: function () {
    console.log('you have reached the index');
  },

  viewPost: function (id) {
    console.log('you are viewing post:', id);
  }
});


var router;
$(document).ready(function () {
  router = new AppRouter();
  Backbone.history.start();
});





















