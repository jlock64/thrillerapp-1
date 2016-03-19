var Backbone = require('backbone');
var $ = require('jquery');
var Router = require('./router');
var FormView = require('./formview');

$(document).ready(function() {
  new Router();
  Backbone.history.start({pushstate: true});
});
