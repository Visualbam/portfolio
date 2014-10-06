App.EmployeesNewController = Ember.Controller.extend({

  actions: {
    createEmployee: function() {
      var self = this;
      var fields = this.get('fields');

      if (App.Employee.valid(fields)) {
        var employee = this.store.createRecord('employee', fields)
        employee.save().then(function(employee) {
          self.transitionToRoute('employee', employee)
        });
      } else {
        this.set('showError', true)
      }
    },
    cancel: function() {
      this.transitionToRoute('employees');
    }
  }

});