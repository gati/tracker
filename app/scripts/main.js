
var Tracker = Ember.Application.create();

// Don't abuse this and add to the settings object anywhere else.
Tracker.settings = {
  pusher: {
    appKey: "a420c73a7a8a33664863",
    channels: ["sxsw"]
  }
};

// Flat object where other components can stick models. Not Ember-Data/DS
Tracker.store = {
  mapCenter: {
    lat:30.269816,
    lng:-97.742014
  }
};