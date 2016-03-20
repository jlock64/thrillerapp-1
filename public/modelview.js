var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery'); 
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'article',
  template: _.template(tmpl.post),
  events: {
    'click .delete': 'deleteThrill',
    'click .edit': 'editThrill',
  },
  editThrill: function(event){
    event.preventDefault();

    this.model.set({
      name: this.$el.find('name').val(),
      title: this.$el.find('title').val(),
      location: this.$el.find('location').val(),
      summary: this.$el.find('summary').val(),
      image: this.$el.find('image').val(),
    })
  },
  toggleEdit: function(){
    this.$el.find('.editSection').toggleClass('editSection');
  },
  deleteThrill: function() {
    this.model.destroy();
  },
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
})
