
var Tracker = Ember.Application.create();

// Don't abuse this and add to the settings object anywhere else.
Tracker.settings = {
  pusher: {
    appKey: "a420c73a7a8a33664863",
    channels: ["sxsw"]
  }
};

// Flat object where other components can stick models. Not Ember-Data/DS
Tracker.store = {};

// Listen for shuttle position change events
Tracker.ready = function() {
  Tracker.push.start(Tracker.settings.pusher);
  Tracker.push.bindEvent("sxsw", "shuttle:location", function(data) {
    
    data.forEach(function(item) {
      if(!item) return;
      
      var shuttleBus = Tracker.store.shuttleBusses.findProperty("deviceId", item.device_id);
      if(shuttleBus) {
        shuttleBus.set("currentPosition", item);
      }
    });

  });
};