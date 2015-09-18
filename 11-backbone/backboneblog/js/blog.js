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


var AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var html = $('#appView').html();
    this.$el.html(html);

    this.collection.each(function (post) {
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
    this.$el.html( this.model.get('title') );
    this.$el.appendTo('#posts');
  },
  showPost: function () {
    console.log('showing post', this.model.get('id'));
  }
});


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'viewPost'
  },

  index: function () {
    var appView = new AppView({collection: blogPosts});
    appView.render();
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





















