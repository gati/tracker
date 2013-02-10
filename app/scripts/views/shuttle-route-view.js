Tracker.ShuttleRouteView = Ember.ContainerView.extend({
  templateName: 'shuttle-route',
  streetMap: null,
  shuttleBusses: [],
  willInsertElement: function() {
    this.$().css({ width: "100%", height: "800px" });
  },
  willDestroyElement: function() {
    // remove gmap event bindings
  },
  didInsertElement: function () {
    var content = this.get("controller.content");
    var mapOptions = {
      center: new Tracker.maps.LatLng(content.mapCenter.lat, 
        content.mapCenter.lng),
      zoom: 12,
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
    var streetMap = new Tracker.maps.Map(this.$().get(0), mapOptions);
    //this.set('streetMap', streetMap); //save for future updations

    this.setMapBindings(streetMap);
    this.setOverlay(content, streetMap);
    this.setShuttleStops(content, streetMap);
    this.setShuttleBusses(content, streetMap);
  },
  setMapBindings: function(streetMap) {
    Tracker.maps.addListener(streetMap, "click", function (e) { 
      console.log('lat:'+e.latLng.lat().toFixed(6));
      console.log('lng:'+e.latLng.lng().toFixed(6));
    });
  
    Tracker.maps.addListener(streetMap, 'zoom_changed', function() {
      var currentZoom = streetMap.getZoom();
      if(currentZoom !== 15) {
        streetMap.setZoom(15);
      }
    });
  },
  setOverlay: function(content, streetMap) {
    var swBound = new Tracker.maps.LatLng(content.overlayBounds.sw.lat, 
      content.overlayBounds.sw.lng);
    var neBound = new Tracker.maps.LatLng(content.overlayBounds.ne.lat, 
      content.overlayBounds.ne.lng);
    var bounds = new Tracker.maps.LatLngBounds(swBound, neBound);

    var srcImage = "images/overlays/" + content.image;
    var overlay = new Tracker.maps.mapOverlay(bounds, srcImage, streetMap);
  },
  setShuttleStops: function(content, streetMap) {
    content.shuttleStops.forEach(function(shuttleStop) {
      var coordinates = shuttleStop.get("location");
      var position = new Tracker.maps.LatLng(coordinates.lat, coordinates.lng);
      var marker = new Tracker.maps.Marker({
        position: position,
        zIndex: 1000,
        map: streetMap,
        icon: "images/transparent-map-icon.png"
      });

      var infoWindow = new Tracker.maps.InfoWindow;

      Tracker.maps.addListener(marker, "click", function() {
        infoWindow.setContent(shuttleStop.get("name"));
        infoWindow.open(streetMap, marker);
      });
    });
  },
  setShuttleBusses: function(content, streetMap) {
    var childViews = this.get("childViews");
    content.shuttleBusses.forEach(function(shuttleBus) {
      var shuttleBusView = Tracker.ShuttleBusView.create();
      shuttleBusView.setProperties({
        shuttleBus: shuttleBus,
        streetMap: streetMap
      });
      childViews.pushObject(shuttleBusView);
    });
  }
});

/*
  m.addMarker = function(eventData) {
    var position = new google.maps.LatLng(eventData.GPSPoint_lat, 
      eventData.GPSPoint_lon);
    var currentLocation = config.locations[m.location];
    //console.log(eventData);
    //console.log(position);
    
    if(markers[eventData.Device]) {
      markers[eventData.Device].setPosition(position);
    }
    else {
      // using RichMarker (credit: http://code.google.com/p/google-maps-utility-library-v3/) because
      // we need control over the markup/zindex of containing elements in relation to the overlay
      markers[eventData.Device] = new RichMarker({
            position: position,
            map: shuttleMap,
            content: '<div style="display:none;" class="markerContainer"><img src="' + config.baseImagePath + 'darkbus.png"/></div>'
        });
    }
    
    // Now force all markers to appear "above" the overlay. 
      function fixMarkers() {
        var markerContainer = $('.markerContainer'),
          markerParent = markerContainer.parent();
        markerParent.css({position:'relative',zIndex:1000});
        markerParent.parent().css({position:'relative',zIndex:1000});
        markerContainer.css({position:'absolute',zIndex:1000, display:'block'});
      }
      
      fixMarkers();
    
  };
  */