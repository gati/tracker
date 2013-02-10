Tracker.Section = Ember.Object.extend({
  name: null,
  key: null
});

(function() {
  var arr = Tracker.bootstrap.sections;

  Tracker.store.sections = Ember.A();

  for(var i=0;i<arr.length;i++) {
    Tracker.store.sections.pushObject(Tracker.Section.create(arr[i]));
  }
})();