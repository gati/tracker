Tracker.HomeController = Ember.ArrayController.extend({
  init: function() {
    this._super();
    this.set('content', Tracker.store.sections);
  }
})