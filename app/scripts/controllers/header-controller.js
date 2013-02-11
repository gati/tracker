Tracker.HeaderController = Ember.ObjectController.extend({
  init: function() {
    this._super();
    this.set("content", Tracker.store.application);
  }
});