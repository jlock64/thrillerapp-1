var Backbone = require('backbone');
var Model = require ('./model');
module.exports = Backbone.Collection.extend({
 model: Model,
 url: "/thrillers",
 initialize: function (){
   console.log("This is a collection");
 }
});
