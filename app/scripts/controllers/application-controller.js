Tracker.ApplicationController = Ember.ArrayController.extend({
  content: [],
  init: function() {
    this._super();
    festivals = [
      Tracker.Festival.create({name:"Interactive", key: "interactive"}),
      Tracker.Festival.create({name: "Film", key: "film"})
    ];
    this.set('content', Ember.A(festivals));

    window.testing = this;
  }

});

