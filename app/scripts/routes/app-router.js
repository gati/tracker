
Tracker.Router = Em.Router.extend({
  root: Em.Route.extend({
    doHome: function(router, event) {
      router.transitionTo('home');
    },
    doSection: function(router, event) {
      router.transitionTo('section', {key:event.context.key});
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
        // app is aware of the FestivalController, and therefore it has a 
        // "festivalController" property where an instance of FestivalController can
        // be accessed.
        router.get('sectionController').set('content', section);
        
        // connects the "outlet" of applicationController to the "festival"
        // controller. It looks like connecting "festival" gives you the 
        // "stuff called festival" - namely FestivalController and FestivalView.
        router.get('applicationController').connectOutlet('section');
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

