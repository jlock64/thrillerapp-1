var Backbone = require ('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require ('./templates');
var Model = require ('./model');

module.exports = Backbone.View.extend({
 el: '.formContent', // attaches to the div with class formContent
 template: _.template(tmpl.createPost),
 events:{
   'click .createButton': 'submitThriller'
 },
 submitThriller: function (event){
   event.preventDefault();
   var objToSave = {
     name: this.$el.find('input[name="name"]').val(),
     title: this.$el.find('input[name="title"]').val(),
     location: this.$el.find('input[name="location"]').val(),
     summary: this.$el.find('textarea').val(),
     photo: this.$el.find('input[name="image"]').val(),
   };
   var myModel = new Model(objToSave);
   myModel.save();
   this.collection.add(myModel);
   console.log(myModel);
  //  this.collection.add(myModel);
  },

  render: function (){
    var markup = this.template;
    this.$el.html(markup, this.template);
    return this;
},

  initialize: function() {
    console.log('FORM VIEW');
  }
});
