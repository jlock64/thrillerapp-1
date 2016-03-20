var Backbone = require('backbone');
var Model = require ('./model');
var collectionView = require('./collectionView');

module.exports = Backbone.Collection.extend({
 model: Model,
 url: "/thrill",
 initialize: function (){
   console.log("This is a thriller collection");
 }
});
