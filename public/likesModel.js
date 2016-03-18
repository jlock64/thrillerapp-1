var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/thrillerFavorite',
  id: '_id',
  initialize: function() {
    console.log('our likesModel is alive!');
  }
});
