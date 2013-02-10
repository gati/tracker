Tracker.ApplicationController = Ember.ArrayController.extend({
  content: [],
  init: function() {
    this._super();
    this.set('content', Tracker.store.sections);

    this.listenForShuttlePositions();
  },
  listenForShuttlePositions: function() {
    Tracker.push.start(Tracker.settings.pusher);
    Tracker.push.bindEvent("sxsw", "shuttle:location", this.updateShuttlePositions);
  },
  updateShuttlePositions: function(data) {
    data.forEach(function(item) {
      if(!item) return;
      
      var shuttleBus = Tracker.store.shuttleBusses.findProperty("deviceId", item.device_id);
      if(shuttleBus) {
        shuttleBus.set("currentPosition", item);
      }
    });
  }

});

