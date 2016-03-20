var Backbone = require('backbone');
var LoginModel = require('./loginModel');
var $ = require('jquery');
var tmpl = require('./templates');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  el: '.loginForm',
  model: LoginModel,
  url: '/user',
  template: _.template(tmpl.login),
  initialize: function() {
    console.log('login model created');
    this.render();
  },
  events: {
    'click .loginButton': 'loginUser'
  },
  loginUser: function(event) {
    event.preventDefault();
    console.log(('clicky'));
    var loginToSave = {
      name: this.$el.find('input[name="username"]').val(),
      password: this.$el.find('input[name="password"]').val()
    };
    this.$el.find('input').val('');
    var myLogin = new LoginModel(loginToSave);
    myLogin.save();
    console.log(myLogin.toJSON());
    window.glob = myLogin;
    // this.model.add(myLogin);
  },
  render: function() {
    var markup = this.template();
    this.$el.html(markup);
    return this;
  }
});
