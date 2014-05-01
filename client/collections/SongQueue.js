// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //this.set('songCollection', new Songs());
    this.on('add', function(song){
      this.add(song);
      if(this.models.length===1){
        this.playFirst(song);
      }
    }, this);


    // this.on('ended', function(){
    //   debugger;
    //   //this.ended();
    // }, this);

  },

  playFirst: function(song){
    this.models[0].play();
    //this.get('songCollection').add(song);
  },

  ended: function(){
    debugger;
    this.trigger('ended', this);

  }
});
