
Tracker.Router = Em.Router.extend({
  root: Em.Route.extend({
    doHome: function(router, event) {
      router.transitionTo('home');
    },
    doSection: function(router, event) {
      router.transitionTo('section', {key:event.context.key});
    },
    doShuttleRoute: function(router, event) {
      router.transitionTo('shuttleRoute', event.context);
    },
    home: Ember.Route.extend({
      route: '/'
    }),
    section: Ember.Route.extend({
      route: '/section/:key',
      connectOutlets: function(router, context) {
        var collection = router.getPath('applicationController.content');
        var section = collection.findProperty("key", context.key);

        // An instance of every controller is made available
        // as a property of the router when the application loads. So the
        // app is aware of the SectionController, and therefore it has a 
        // "festivalController" property where an instance of SectionController can
        // be accessed.
        router.get('sectionController').set('content', section);
        
        // connects the "outlet" of applicationController to the "section"
        // controller. It looks like connecting "section" gives you the 
        // "stuff called section" - namely SectionController and SectionView.
        router.get('applicationController').connectOutlet('section');
      }
    }),
    shuttleRoute: Ember.Route.extend({
      route: '/shuttle-route/:key',
      connectOutlets: function(router, context) {
        router.get('shuttleRouteController').set('content', context);
        router.get('applicationController').connectOutlet('shuttleRoute');
      }
    })
  })
});

