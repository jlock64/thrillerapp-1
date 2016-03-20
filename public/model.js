var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: '/thrill',

  initialize: function() {
    console.log('It is alive');
    // console.log(this.model);
  },
  defaults: {
    name: '',
    title: '',
    location: '',
    summary: '',
    image: 'http://www.fillmurray.com/250/250',
  }
});
