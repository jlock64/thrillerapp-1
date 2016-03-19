var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var ModelView = require('./modelView');

module.exports = Backbone.View.extend({
  el: '.content',  // attaches to article with class content
  initialize: function() {
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
  },

  addOne: function(el) {
    var modelView = new ModelView({model: el});
   this.$el.append(modelView.render().el);



  },
  addAll: function() {
    this.$el.html('');
    _.each(this.collection.models, this.addOne, this);
  }
});
