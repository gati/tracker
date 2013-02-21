Tracker.ApplicationView = Ember.View.extend({
  templateName: 'application',
  didInsertElement: function() {
    $('a').click(function() { return; });
  }
});
