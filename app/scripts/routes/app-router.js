
Tracker.Router = Em.Router.extend({
  root: Em.Route.extend({
    doHome: function(router, event) {
      router.transitionTo('home');
    },
    doSection: function(router, event) {
      router.transitionTo('section', {key:event.context.key});
    },
    doShuttleRoute: function(router, event) {
      router.transitionTo('shuttleRoute', {key:event.context.key});
    },
    doInfoRoute: function(router, event) {
      router.transitionTo('infoRoute');
    },
    index: Ember.Route.extend({
      route: "/",
      connectOutlets: function(router) {
        router.get('applicationController').connectOutlet('header', 'header');
      },
      home: Ember.Route.extend({
        route: '/',
        connectOutlets: function(router) {
          Tracker.store.application.set("title", "SXSW Shuttle Tracker");
          router.get('applicationController').connectOutlet('home');
        }
      }),
      section: Ember.Route.extend({
        route: '/section/:key',
        connectOutlets: function(router, context) {
          var collection = router.getPath('homeController.content');
          var section = collection.findProperty("key", context.key);

          Tracker.store.application.set("showBack", true);
          Tracker.store.application.set("title", "Where are you?");

          router.get('sectionController').set('content', section);
          router.get('applicationController').connectOutlet('section');
        }
      }),
      shuttleRoute: Ember.Route.extend({
        route: '/shuttle-route/:key',
        connectOutlets: function(router, context) {
          var collection = Tracker.store.shuttleRoutes;
          var shuttleRoute = collection.findProperty("key", context.key);
          var destination = shuttleRoute.get("destination");
          
          Tracker.store.application.set("showBack", true);
          Tracker.store.application.set("title", destination.get("name"));

          router.get('shuttleRouteController').set('content', shuttleRoute);
          router.get('applicationController').connectOutlet('shuttleRoute');
        }
      }),
      infoRoute: Ember.Route.extend({
        route: '/walking',
        connectOutlets: function(router, context) {
          router.get('applicationController').connectOutlet('infoRoute');
        }
      })

    })
  })
});

