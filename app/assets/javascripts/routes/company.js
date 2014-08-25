// We have access to id through the params argument.
// The this.store.find function gets a record by its id. It actually returns a promise which Ember will attempt to resolve.

App.CompanyRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('company', params.id) 
  }
});