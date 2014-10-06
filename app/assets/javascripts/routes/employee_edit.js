App.EmployeeEditRoute = Ember.Route.extend({
  activate:   function() { this.controllerFor('employee').set('isEditing', true) },
  deactivate: function() { this.controllerFor('employee').set('isEditing', false) }
});