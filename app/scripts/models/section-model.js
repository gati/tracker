Tracker.Section = Ember.Object.extend({
  name: null,
  key: null,
  shuttleRoutes: Ember.A()
});

Tracker.store.sections = Tracker.bootstrap.sections.map(function(section) {
  var trackerSection = Tracker.Section.create(section);
  
  var shuttleRoutes = section.routes.map(function(route) {
    return Tracker.store.shuttleRoutes.findProperty("key", route);
  });

  trackerSection.set("shuttleRoutes", shuttleRoutes);

  return trackerSection;
});