Tracker.Section = Ember.Object.extend({
  name: null,
  key: null
});

Tracker.store.sections = Tracker.bootstrap.sections.map(function(section) {
  return Tracker.Section.create(section);
});