App.CompaniesNewController = Ember.Controller.extend({

  actions: {
    createLead: function() {
      var self = this;
      var lead = this.store.createRecord('company', this.get('fields'));
      lead.save().then(function() {
        self.transitionToRoute('company', company);
      });
    },
    cancel: function() {
      this.transitionToRoute('companies');
    }
  }

});