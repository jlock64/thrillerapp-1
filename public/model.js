var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: '/thrillers',
  initialize: function() {
    console.log('It is alive');
    console.log(this.model);
  },
  defaults: {
    name: 'Candance Hank'
    title: 'National Parks',
    postDate: 'March 17th, 2016',
    date: 'Feb 2016',
    location: 'Yosemite National Park',
    image: 'http://fillmurray.com/250/250',
    summary: 'This was a great trip to Yosemite',
    favorite: '5',
    favoriteRating: '5'
  }
});
