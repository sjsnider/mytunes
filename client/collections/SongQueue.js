// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //this.set('songCollection', new Songs());
    this.on('add', function(song){
      this.add(song);
      if(this.models.length===1){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song){
      this.shift();
    }, this);

    this.on('ended', function(){
      this.shift();

      if (this.length ===1){
        this.playFirst();
      }else if(this.length > 1){
        this.at(0).play();
      }
    }, this);

  },

  playFirst: function(){
    this.at(0).play();
    //this.get('songCollection').add(song);
  }

});
