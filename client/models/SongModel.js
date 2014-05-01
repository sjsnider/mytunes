// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  
  // initialize: function(){

  // 	this.on('ended', function(){
  // 		debugger;
  // 		//this.ended();
  // 	}, this);
  // },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  ended: function(){
  	debugger;
    this.trigger('ended', this);

  }


});
