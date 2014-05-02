// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('ended', function(){
      this.shift();
      if(this.length===1){
        this.playFirst();
      }else if(this.length>1){
        this.at(0).play();
      }
    }, this);

    this.on('add', function(){
      if(this.length===1){
        this.playFirst();
      }
      else{
        this.at(0).play();
      }
    }, this);

    this.on('dequeue', function(song){
      this.remove(song);
      if(this.length===1){
        this.playFirst();
      }else if(this.length > 1){
        this.at(0).play();
      }else{
        this.trigger('stop');
      }
    }, this);

  },

  playFirst: function(){
    this.at(0).play();
  }

});
