Tracker.ShuttleRouteView = Ember.View.extend({
  templateName: 'shuttle-route',
  streetMap: null,
  willInsertElement: function() {
    this.$().css({ width: "400px", height: "400px" });
  },
  didInsertElement: function () {
    var content = this.get("controller.content");
    var mapOptions = {
      center: new google.maps.LatLng(content.mapCenter.lat, content.mapCenter.lng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      draggable: true,
      navigationControl: false,
      scalControl: false,
      panControl: false,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false
    };
    var streetMap = new google.maps.Map(this.$().get(0), mapOptions);
    this.set('streetMap', streetMap); //save for future updations

    this.setMapBindings(streetMap);
  },
  setMapBindings: function(streetMap) {
    google.maps.event.addListener(streetMap, "click", function (e) { 
      console.log('lat:'+e.latLng.lat().toFixed(6));
      console.log('lng:'+e.latLng.lng().toFixed(6));
    });
  
    google.maps.event.addListener(streetMap, 'zoom_changed', function() {
      var currentZoom = streetMap.getZoom();
      if(currentZoom !== 15) {
        streetMap.setZoom(15);
      }
    });
  },
  willDestroyElement: function() {
    // remove gmap event bindings
  }
});