
Tracker.Router = Em.Router.extend({
  root: Em.Route.extend({
    doHome: function(router, event) {
      router.transitionTo('home');
    },
    doFestival: function(router, event) {
      router.transitionTo('festival', {key:event.context.key});
    },
    home: Ember.Route.extend({
      route: '/'
    }),
    festival: Ember.Route.extend({
      route: '/festival/:key',
      connectOutlets: function(router, context) {
        var collection = router.getPath('applicationController.content');
        var festival = collection.findProperty("key", context.key);
        router.get('festivalController').set('content', festival);
        router.get('applicationController').connectOutlet('festival');
      }
    }),
    shuttleRoute: Ember.Route.extend({
      route: '/shuttle-route/:key',
      connectOutlets: function(router, event) {
        router.get('applicationController').connectOutlet('shuttleRoute');
      }
    })
  })
});

