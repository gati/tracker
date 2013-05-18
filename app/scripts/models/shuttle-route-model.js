
Tracker.ShuttleRoute = Ember.Object.extend({
  key: "",
  image: "",
  destination: {},
  mapCenter: {},
  overlayBounds: {},
  shuttleStops: Ember.A(),
  shuttleBusses: Ember.A(),
  isActive: function() {
    var startDate = this.get('startDate');
    var endDate = this.get('endDate').add('days', 1);
    var today = moment();
    var isActive = false;

    if(today.isAfter(startDate) && today.isBefore(endDate)) {
      isActive = true;
    }

   return isActive;
  }.property('startDate', 'endDate'),
  isInService: function() {
    var startTime = parseInt(moment("2013-01-01 " + this.get("startTime")).format("H"), 10);
    var endTime = parseInt(moment("2013-01-01 " + this.get("endTime")).format("H"), 10);
    var now = parseInt(moment().format("H"), 10);
    var isInService = false;

    if(endTime >= 12 && now >= startTime && now <= endTime) {
      isInService = true;
    }
    else if(endTime < 12) {
      // ends in AM, so anything in PM that's after start time
      // is fair game
      if(now > 12 && now > startTime) {
        isInService = true;
      }
      else if(now < 12 && (now < endTime || now > startTime)) {
        isInService = true;
      }
    }
    
    return isInService;
  }.property('startTime', 'endTime'),
  activeDates: function() {
    var startDate = this.get('startDate');
    var endDate = this.get('endDate');
    var dateFormat = "ddd, MMM Do";

    return startDate.format(dateFormat) + " to " + endDate.format(dateFormat);

  }.property('startDate', 'endDate'),
  activeTimes: function() {
    var startTime = moment("2013-01-01 " + this.get("startTime"));
    var endTime = moment("2013-01-01 " + this.get("endTime"));
    var dateFormat = "h:mm A";
    
    return startTime.format(dateFormat) + " to " + endTime.format(dateFormat);
  }.property('startTime', 'endTime')
});

Tracker.store.shuttleRoutes = Tracker.bootstrap.routes.map(function(route){
  var shuttleRoute = Tracker.ShuttleRoute.create({
    key: route.key,
    image: route.image,
    mapCenter: route.mapCenter,
    overlayBounds: route.overlayBounds,
    startDate: moment(route.startDate),
    endDate: moment(route.endDate),
    startTime: route.startTime,
    endTime: route.endTime
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