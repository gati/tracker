Tracker.HomeView = Ember.View.extend({
  templateName: 'home',
  didInsertElement: function() {
    $('a').click(function() { return; });
  }
});