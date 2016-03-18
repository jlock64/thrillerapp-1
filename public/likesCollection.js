var Backbone = require('backbone');
var LikesModel require('./likesModel'):

module.exports = Backbone.Collection.extend({
  model: LikesModel,
  url: './thrillers',
  initialize: function() {
    console.log('likes collection is alive');
  }

});
