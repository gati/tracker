Tracker.BackButtonView = Ember.View.extend({
  templateName: "backbutton",
  click: function(e) {
    history.back();
  }
})