App.CompaniesNewController = Ember.Controller.extend({

  actions: {
    createLead: function() {
      var self = this;
      var fields = this.get('fields');

      if (App.Company.valid(fields)) {
        var company = this.store.createRecord('company', fields)
        company.save().then(function(company) {
          self.transitionToRoute('company', company)
        });
      } else {
        this.set('showError', true)
      }
    },
    cancel: function() {
      this.transitionToRoute('companies');
    }
  }

});