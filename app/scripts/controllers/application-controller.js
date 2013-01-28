Tracker.ApplicationController = Ember.ArrayController.extend({
  content: [],
  init: function() {
    this._super();
    festivals = [
      Tracker.Festival.create({name:"Interactive"}),
      Tracker.Festival.create({name: "Film"})
    ];
    this.set('content', Ember.A(festivals));

    window.testing = this;
  }
  
});

