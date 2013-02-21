Tracker.InfoRouteView = Ember.View.extend({
  templateName: 'inforoute',
  didInsertElement: function() {
    $('a').click(function() { return; });
  }
});
