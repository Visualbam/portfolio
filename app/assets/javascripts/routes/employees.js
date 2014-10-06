// Remember that model is a hook that’s called whenever the route is entered. 
// The result of the model function is then available to the controller, view, and template.

App.EmployeesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('employee')
  }
  // afterModel: function(employees, transition) {
  //   this.transitionTo('employee', employees.get('firstObject'));
  // }
});