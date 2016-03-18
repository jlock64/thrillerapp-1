var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/thrillerLogin',
  id: '_id', // what is the java id called
  initialize: function() {
    console.log('login Model is alive');
  }
});
