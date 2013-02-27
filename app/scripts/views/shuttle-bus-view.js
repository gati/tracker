Tracker.ShuttleBusView = Ember.View.extend({
  //templateName: 'shuttle-route',
  init: function() {
    this.markers = [];
  },
  willDestroyElement: function() {
    
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

    this.markers.push(new Tracker.maps.HTMLMarker({
        position: position,
        map: streetMap,
        content: '<div class="markerContainer"><img src="images/markers/darkbus.png"/></div>',
        shadow: "images/transparent-map-icon.png"
      })
    );

    //this.forceMarkerVisible();
  },
  repositionMarket: function() {
    var markers = this.get("markers");
    for(var i=0;i<markers.length;i++) {
      markers[i].setMap(null);  
    }
    
    this.didInsertElement();
    //this.forceMarkerVisible();
  }.observes("currentPosition"),
  forceMarkerVisible: function() {
    var markerContainer = $('.markerContainer');
    var markerParent = markerContainer.parent();

    markerParent.css({position:'relative',zIndex:1000});
    markerParent.parent().css({position:'relative',zIndex:1000});
    markerContainer.css({position:'absolute',zIndex:1000, display:'block'});
  }
});