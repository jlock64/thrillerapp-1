var Backbone = require('backbone');
var $ = require('jquery');
var Router = require('./router');
var FormView = require('./formview');

$(document).ready(function() {
  new Router();
  Backbone.history.start({pushstate: true});

  // menu click
  $('.hamburger').mouseenter(function() {
    $('.dropdown').toggleClass('hidden');
  });
  // .mouseleave(function() {
  //   $('.dropdown').toggleClass('hidden');
  // });

  // Navigation creat thriller link
  $('#createNavLink').on('click', function() {
    $('#createNavLink').closest('header').siblings().addClass('hidden');
    $('.formContent').removeClass('hidden');
  });

  // login in form revealed after click on signIn
  $('#signIn').on('click', function() {
    $(this).closest('header').siblings().addClass('hidden');
    $('.loginForm').removeClass('hidden');
  });
  // click login Button to take you back to homepage
  $('.loginButton').on('click', function() {
  $('.loginForm').addClass('hidden');
  $('.hero, .content').removeClass('hidden');
  });

  $('.createButton').on('click', function() {
    $('.formContent').addClass('hidden');
    $('.content').removeClass('hidden');
  });


}); // end of document ready
