
var Tracker = Ember.Application.create();

// Flat object for other components to stick models. Not Ember-Data/DS
Tracker.store = {};

// Don't abuse this and add to the settings object anywhere else.
Tracker.settings = {};

