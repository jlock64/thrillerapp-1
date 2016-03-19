var Backbone = require('backbone');
var LoginModel = require('./loginModel');
var $ = require('jquery');
var tmpl = require('./templates');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  model: LoginModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/thrillerLogin',
  template: _.template(tmpl.login),
  initialize: function() {
    console.log('login model created');
    this.render();
  },
  events: {
    'click .loginButton': 'loginUser'
  },
  loginUser: function(e) {
    e.preventDefault();
    this.model.set({
      username: this.$el.find('input[name="username"]').val(),
      password: this.$el.find('input[name="password"]').val()
    });
    this.$el.find('input').val('');
    this.View.add(this.model);
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
