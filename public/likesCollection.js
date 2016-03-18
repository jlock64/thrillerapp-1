var Backbone = require('backbone');
var LikesModel = require('./likesModel');

module.exports = Backbone.Collection.extend({
  model: LikesModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/thrillerFavorite',
  initialize: function() {
    // console.log('likes collection is alive');
  }

});
