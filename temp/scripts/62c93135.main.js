
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