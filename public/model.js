var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/thriller',
  initialize: function() {
    console.log('It is alive');
    console.log(this.model);
  },
  defaults: {
    name: '',
    title: '',
    postDate: '',
    date: '',
    location: '',
    image: 'http://fillmurray.com/250/250',
    summary: '',
    favorite: '',
    favoriteRating: ''
  }
});
