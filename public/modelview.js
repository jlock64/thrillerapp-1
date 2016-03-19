var Backbone = require('backbone');
var _ = require('underscore');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'article',
  template: _.template(tmpl.post),
  events: {
    'click .delete': 'deleteThrill',
    'click .edit': 'editThrill',
  },
  editThrill: function(){
    event.preventDefault();

    this.model.set({
      name: this.$el.find('').val(),
      title: this.$el.find('').val(),
      location: this.$el.find('').val(),
      summary: this.$el.find('').val(),
      image: this.$el.find('').val(),
    })
  },
  deleteThrill: function(){
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
