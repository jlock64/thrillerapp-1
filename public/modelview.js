var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'article',
  template: _.template(tmpl.post),
  events: {
    'click .delete': 'deleteThrill',
    'click #edit': 'editThrill',
  },
  editThrill: function(event){
    event.preventDefault();
    this.model.set({
      name: this.$el.find('.nameEdit').val(),
      title: this.$el.find('.titleEdit').val(),
      location: this.$el.find('.locationEdit').val(),
      summary: this.$el.find('.summaryEdit').val(),
      photo: this.$el.find('.imageEdit').val(),
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
