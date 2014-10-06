App.EmployeesRoute = Ember.Route.extend({
  model: function() { return this.store.find('employee') }
});