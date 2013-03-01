
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
          Tracker.store.application.set("title", "Shuttle Tracker");
          Tracker.store.application.set("showBack", false);
          router.get('applicationController').connectOutlet('home');
        }
      }),
      section: Ember.Route.extend({
        route: '/section/:key',
        connectOutlets: function(router, context) {
          var collection = router.getPath('homeController.content');
          var section = collection.findProperty("key", context.key);

          if(context.key === "film") {
            Ember.run.next(function() {
              var shuttleRouteKey = "film1";
              history.pushState(null, "", "#home");
              router.transitionTo('shuttleRoute', {key: shuttleRouteKey});
            });
          }
          else {
            Tracker.store.application.set("showBack", true);
            Tracker.store.application.set("title", "Where are you?");

            router.get('sectionController').set('content', section);
            router.get('applicationController').connectOutlet('section');
          }
        }
      }),
      shuttleRoute: Ember.Route.extend({
        route: '/shuttle-route/:key',
        connectOutlets: function(router, context) {
          var shuttleRoutes,
            destination,
            destinationName,
            collection = Tracker.store.shuttleRoutes;

          if(context.key === "all") {
            shuttleRoutes = collection.filter(function(item) {
              var section = Tracker.store.sections.findProperty("key", "interactive");
              return section.get("routes").contains(item.get("key"));
            });
            destinationName = "All Routes";
          }
          else {
            shuttleRoute = collection.findProperty("key", context.key);
            shuttleRoutes = [shuttleRoute];
            destination = shuttleRoute.get("destination");
            destinationName = destination.get("name");
          }
          
          Tracker.store.application.set("showBack", true);
          Tracker.store.application.set("title", destinationName);

          router.get('shuttleRouteController').set('content', shuttleRoutes);
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

