// We set fields to an empty object in the route so that it’s reset every time we visit the new lead route.
App.CompaniesNewRoute = Ember.Route.extend({

  setupController: function(controller) {
    controller.set('fields', {})
  }

});