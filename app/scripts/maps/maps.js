// Facade for whatever mapping technology the application is using. Currently
// Google Maps.

Tracker.maps = (function(exports) {
  var maps = google.maps;

  exports.addListener = maps.event.addListener;
  exports.Map = maps.Map;
  exports.LatLng = maps.LatLng;
  exports.LatLngBounds = maps.LatLngBounds;
  exports.Marker = maps.Marker;
  exports.HTMLMarker = RichMarker;
  exports.InfoWindow = maps.InfoWindow;

  return exports;
})(Tracker.maps || {});