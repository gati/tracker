Tracker.ShuttleStop = Ember.Object.extend({
  name: null,
  key: null
});

Tracker.store.shuttleStops = Tracker.bootstrap.stops.map(function(stop) {
  return Tracker.ShuttleStop.create(stop);
});