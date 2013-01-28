
Tracker.Router = Em.Router.extend({
  root: Em.Route.extend({
    doHome: function(router, event) {
      router.transitionTo('home');
    },
    doFestival: function(router, event) {
      festivalName = event.context.name;
      router.transitionTo('festival', {name:festivalName.toLowerCase()});
    },
    home: Ember.Route.extend({
      route: '/'
    }),
    festival: Ember.Route.extend({
      route: '/festival/:name',
      connectOutlets: function(router, context) {
        //var festival = router.getPath('applicationController.content').objectAt(context.item_id);
        router.get('applicationController').connectOutlet('festival');
      }
    }),
    shuttleRoute: Ember.Route.extend({
      route: '/shuttle-route/:name',
      connectOutlets: function(router, event) {
        router.get('applicationController').connectOutlet('shuttleRoute');
      }
    })
  })
});

