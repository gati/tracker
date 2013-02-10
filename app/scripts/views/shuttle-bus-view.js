Tracker.ShuttleBusView = Ember.View.extend({
  //templateName: 'shuttle-route',
  
  willDestroyElement: function() {
    // remove gmap event bindings
  },
  currentPositionBinding: "shuttleBus.currentPosition",
  currentShuttleBusPosition: function() {
    var shuttleBus = this.get("shuttleBus");
    var position = new Tracker.maps.LatLng(shuttleBus.currentPosition.lat, 
      shuttleBus.currentPosition.lng);

    return position;
  },
  didInsertElement: function () {
    var streetMap = this.get("streetMap");
    var position = this.currentShuttleBusPosition();

    this.set("marker", new Tracker.maps.Marker({
        position: position,
        map: streetMap
      })
    );
  },
  repositionMarket: function() {
    var marker = this.get("marker");
    var position = this.currentShuttleBusPosition();
    marker.setPosition(position);
  }.observes("currentPosition")
});