
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
  Tracker.store.shuttleRoutes = Tracker.bootstrap.routes.map(function(route){
    var shuttleRoute = Tracker.ShuttleRoute.create({
      key: route.key,
      image: route.image,
      mapCenter: route.mapCenter,
      overlayBounds: route.overlayBounds
    });

    var shuttleStops = route.stops.map(function(stopKey) {
      return Tracker.store.shuttleStops.findProperty("key", stopKey);
    });
    shuttleRoute.set("shuttleStops", shuttleStops);

    var shuttleBusses = route.shuttles.map(function(deviceId) {
      return Tracker.store.shuttleBusses.findProperty("deviceId", deviceId);
    });
    shuttleRoute.set("shuttleBusses", shuttleBusses);

    var location = Tracker.store.shuttleStops.findProperty("key", route.locationKey);
    shuttleRoute.set("destination", location);

    return shuttleRoute;
  });

})();