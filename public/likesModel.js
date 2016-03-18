var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: './thrillers',
  id: '_id',
  initialize: function() {
    console.log('our likesModel is alive!');
  }
});
