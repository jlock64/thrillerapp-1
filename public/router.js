var Backbone = require('backbone');
var $ = require('jquery');
var LikesCollection = require('./likesCollection');
var LikesCollectionView = require('./LikesCollectionView');
var ThrillerCollection = require('./collection');
var ThrillerCollectionView = require('./collectionView');
var LoginView = require('./loginFormView');
var FormView = require('./formview');

module.exports = Backbone.Router.extend({
  subview: null,
  routes: {
    "": "homepage",
    "home": "homepage",
    "likes": "likes",
    "login": "login"
  },
  likes: function() {
    var that = this;
    var likesCol = new LikesCollection();
    new LoginView();
    //collection likesCol is still empty
    likesCol.fetch().then(function(data) {
      console.log(likesCol.models.length); //data is ready
      that.renderSubview(new LikesCollectionView({collection: likesCol}));
    });

  },
  homepage: function() {
    var that = this;
    var thrillerCol = new ThrillerCollection();
    new LoginView()
    thrillerCol.fetch().then(function(data) {
      // console.log(thrillerCol.models.length); //data is ready
      that.renderSubview(new ThrillerCollectionView({collection: thrillerCol}));
      var newForm = new FormView({collection: thrillerCol});
      newForm.render();
    });
  },
  login: function() {
    var that = this;
    that.renderSubview(new LoginView({}));
  },
  renderSubview: function(subview) {
    this.subview && this.subview.remove();
    this.subview = subview;
  }

});
