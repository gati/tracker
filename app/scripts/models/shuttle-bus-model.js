Tracker.ShuttleBus = Ember.Object.extend({
  deviceId: null,
  currentPosition: {
    // Siberia, where we presumably will never have a shuttle
    lat: 60,
    lng: 150
  }
});

Tracker.store.shuttleBusses = Tracker.bootstrap.shuttles.map(function(shuttle) {
  return Tracker.ShuttleBus.create(shuttle);
});