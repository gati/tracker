Tracker.SectionView = Ember.View.extend({
  templateName: 'section',
  didInsertElement: function() {
    $('a').click(function() { return; });
  }
});