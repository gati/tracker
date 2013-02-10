Tracker.ApplicationController = Ember.ArrayController.extend({
  content: [],
  init: function() {
    this._super();
    this.set('content', Tracker.store.sections);
  }

});

