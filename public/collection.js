var Backbone = require('backbone');
var Model = require ('./model');
module.exports = Backbone.Collection.extend({
 model: Model,
 url: "http://tiny-tiny.herokuapp.com/collections/thriller",
 initialize: function (){
   console.log("This is a thriller collection");
 }
});
