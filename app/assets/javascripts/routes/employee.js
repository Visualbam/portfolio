App.EmployeeRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('employee', params.id) 
  }
});