
Tracker.ShuttleRoute = Ember.Object.extend({
  key: "",
  image: "",
  destination: {},
  mapCenter: {},
  overlayBounds: {},
  shuttleStops: Ember.A(),
  shuttleBusses: Ember.A()
});

(function() {
  var arr = Tracker.bootstrap.routes;
  Tracker.store.shuttleRoutes = [];

  var route,
    stop,
    shuttle,
    location,
    shuttleStops,
    shuttleBusses;
  
  for(var i=0; i<arr.length;i++) {
    route = Tracker.ShuttleRoute.create({
      key: arr[i].key,
      image: arr[i].image,
      mapCenter: arr[i].mapCenter,
      overlayBounds: arr[i].overlayBounds
    });

    shuttleStops = arr[i].stops.map(function(stopKey) {
      return Tracker.store.shuttleStops.findProperty("key", stopKey);
    });
    route.set("shuttleStops", shuttleStops);

    shuttleBusses = arr[i].shuttles.map(function(deviceId) {
      return Tracker.store.shuttleBusses.findProperty("deviceId", deviceId);
    });
    route.set("shuttleBusses", shuttleBusses);

    location = Tracker.store.shuttleStops.findProperty("key", arr[i].locationKey);
    route.set("destination", location);


    Tracker.store.shuttleRoutes.push(route);

  }

})();