// Remember that model is a hook that’s called whenever the route is entered. 
// The result of the model function is then available to the controller, view, and template.

App.CompaniesRoute = Ember.Route.extend({
  model: function() { return this.store.find('company') }
});