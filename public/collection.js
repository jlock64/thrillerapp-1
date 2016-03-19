var Backbone = require('backbone');
var Model = require ('./model');
var collectionView = require('./collectionView');

module.exports = Backbone.Collection.extend({
 model: Model,
 url: 'http://tiny-tiny.herokuapp.com/collections/thriller',
 initialize: function (){
   console.log("This is a thriller collection");
 }
});
