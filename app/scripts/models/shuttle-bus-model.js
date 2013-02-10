Tracker.ShuttleBus = Ember.Object.extend({
  deviceId: null
});

(function() {
  var arr = Tracker.bootstrap.shuttles;

  Tracker.store.shuttleBusses = Ember.A();

  for(var i=0;i<arr.length;i++) {
    Tracker.store.shuttleBusses.pushObject(Tracker.ShuttleBus.create(arr[i]));
  }
})();