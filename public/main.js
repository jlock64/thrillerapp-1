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

  // sign in link
  $('#signIn').on('click', function() {
    $(this).closest('header').siblings().addClass('hidden');
    $('.loginForm').removeClass('hidden');
  });

  // back to homepage with login button and header
  $('.loginButton, .homeBtn').on('click', function() {
  $('.loginForm, .formContent').addClass('hidden');
  $('.hero, .content').removeClass('hidden');
  });

  // create new post button
  $('.formContent').on('click', '.createButton', function() {
    $('.formContent').addClass('hidden');
    $('.content').removeClass('hidden');
  });

  $('#viewNavLink').on('click', function() {
    $('.hero, .formContent').addClass('hidden');
    $('.content').removeClass('hidden');
  });

  // edit button
  $('.edit').on('click', function() {
    $('.editSection').removeClass('hidden');
  });

  // home button


}); // end of document ready
