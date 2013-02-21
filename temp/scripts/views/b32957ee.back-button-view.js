Tracker.BackButtonView = Ember.View.extend({
  templateName: "backbutton",
  tagName: "a",
  classNames: ["header-btn-left", "black"],
  click: function(e) {
    history.back();
  }
})