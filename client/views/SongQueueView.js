// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('dequeue', this.render, this);
    this.collection.on('ended', this.render, this);
    this.collection.on('removeFromView', this.render, this);
    this.render();
  },

  events: {
    'click button': function() {
    if(this.collection.length>1){
      this.collection.at(0).ended();
    }
    }
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Queue<br><button>Next Song</h1></button>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
