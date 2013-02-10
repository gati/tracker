Tracker.ShuttleBus = Ember.Object.extend({
  deviceId: null
});


Tracker.store.shuttleBusses = Tracker.bootstrap.shuttles.map(function(shuttle) {
  return Tracker.ShuttleBus.create(shuttle);
});