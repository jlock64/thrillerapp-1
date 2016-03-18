var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: './thrillers',
  id: '_id', // what is the java id called
  initialize: function() {
    console.log('login Model is alive');
  }
});
