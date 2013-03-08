Tracker.BackButtonView = Ember.View.extend({
  templateName: "backbutton",
  tagName: "a",
  classNames: ["header-btn-left", "black"],
  click: function(e) {
    if(window.routeHome) {
      window.routeHome = false;
      window.location.href = "/";
    }
    else {
      history.back();
    }
  }
})