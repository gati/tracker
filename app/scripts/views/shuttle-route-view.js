Tracker.ShuttleRouteView = Ember.ContainerView.extend({
  templateName: 'shuttle-route',
  streetMap: null,
  shuttleBusses: [],
  willInsertElement: function() {
    this.$().css({ width: "100%", height: $(window).height() + "px" });
  },
  willDestroyElement: function() {

  },
  didInsertElement: function () {
    var contents = this.get("controller.content");
    var mapCenter = (contents.length > 1) ? Tracker.store.mapCenter : contents[0].mapCenter;
    var mapOptions = {
      center: new Tracker.maps.LatLng(mapCenter.lat,
        mapCenter.lng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI:true,
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

    var that = this;
    contents.forEach(function(content) {
      that.setMapBindings(streetMap);
      that.setOverlay(content, streetMap);
      that.setShuttleStops(content, streetMap);
      that.setShuttleBusses(content, streetMap);
      that.setUserLocation(streetMap);
    });

    if(contents.length === 1) {
      this.setActiveModal(contents[0], streetMap);
    }

    $('a').click(function() { return; });

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

    var srcImage = "/images/overlays/" + content.image;
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

      var infoWindow = new Tracker.maps.InfoWindow();

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
  },
  setUserLocation: function(streetMap) {
    navigator.geolocation.getCurrentPosition(function(userPosition) {
      var position = new Tracker.maps.LatLng(userPosition.coords.latitude,
        userPosition.coords.longitude);
      var marker = new Tracker.maps.Marker({
        position: position,
        map: streetMap
      });

      var infoWindow = new Tracker.maps.InfoWindow();

      Tracker.maps.addListener(marker, "click", function() {
        infoWindow.setContent("You are here. Hello!");
        infoWindow.open(streetMap, marker);
      });
    });
  },
  setActiveModal: function(content, streetMap) {
    var message;
    if(content.get("isActive")) {
      if(!content.get("isInService")) {
        // shuttle only runs during certain times
        message = "This route runs from " + content.get("activeTimes") + " daily.";
        this.populateModal(message);
      }
    }
    else {
      message = "This route is active from " + content.get("activeDates");
      this.populateModal(message);
    }
  },
  populateModal: function(message) {
    this.$().prepend('<div class="modalBox alert">'+message+'</div>');
  }
});