// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(param){
    this.set('songQueue', new SongQueue());
    this.set('currentSong', new SongModel());

    param.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    param.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);

    param.library.on('stop', function(song){
      this.set('currentSong',null);
    }, this);

  }


});
