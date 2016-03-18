var Backbone = require ('backbone');
var _ =required('underscore');
var tmpl = require ('./templates');
var Model = require ('./model.js');

module.exports = Backbone.View.extend({
 tagName: 'el.formContent',
 template: _.template(tmpl.createPost),
 events:{
   'submit form': 'submitThriller'
 },
 submitThriller: function (event){
   event.preventDefault();
   var el = this.$el
   this.model.set({
     name: $el.find('input[name="name"]').val(),
     title: $el.find('input[name="title"]').val(),
     postDate:$el.find('input[name="postDate"]').val(),
     date:$el.find('input[name="date"]').val(),
     location:$el.find('input[name="location"]').val(),
     image:$el.find('input[name="image"]').val(),
     summary:$el.find('input[name="summary"]').val(),
     favorite:$el.find('input[name="favorite"]').val(),
     favoriteRating:$el.find('input[name="favoriteRating"]').val(),
   });
   this.model.save();
   this.collection.add(this.model);
   this.model = new Model ({});
 }
},
render: function (){
 var markup = this.template(this.model.toJSON());
 $el.html(markup);
 return this;
}
})
