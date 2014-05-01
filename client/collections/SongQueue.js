// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //this.set('songCollection', new Songs());
    this.on('add', function(song){
      this.add(song);
      debugger;
      if(this.models.length===1){
        this.playFirst(song);
      }
    }, this);
  },

  playFirst: function(song){
    debugger;
    this.models[0].play();
    //this.get('songCollection').add(song);
  }
});
