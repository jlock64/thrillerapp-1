var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var LikesModelView = require('./likesModelView');

module.exports = Backbone.View.extend({
  el: '.likesContent', // already have likes ModelView going here,
  initialize: function() {
    this.addAll();
  },
  addOne: function(el) {
    var modelView = new LikesModelView({model: el});
    this.$el.append(modelView.render().el);
    //add this to bing the items to the page
    this.collection.bind('add', this.add);
    this.collection.bind('remove', this.remove);
},
  addAll: function() {
    this.$el.html('');
    _.each(this.collection.models, this.addOne, this);
  }
});
