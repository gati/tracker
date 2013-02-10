Tracker.ShuttleStop = Ember.Object.extend({
  name: null,
  key: null
});

(function() {
  var arr = Tracker.bootstrap.stops;

  Tracker.store.shuttleStops = Ember.A();

  for(var i=0;i<arr.length;i++) {
    Tracker.store.shuttleStops.pushObject(Tracker.ShuttleStop.create(arr[i]));
  }
})();