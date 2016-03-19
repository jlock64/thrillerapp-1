var Backbone = require('backbone');
var $ = require('jquery');
var Router = require('./router');
var FormView = require('./formview');

$(document).ready(function() {
  new Router();
  Backbone.history.start({pushstate: true});

  // menu click
  $('.hamburger').on('click', function() {
    $('.dropdown').toggleClass('hidden');
  });

  // Navigation creat thriller link
  $('#createNavLink').on('click', function() {
    $('#createNavLink').closest('header').siblings().hide();
    $('.formContent').show();
  });
});
