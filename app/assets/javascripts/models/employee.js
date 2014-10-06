App.Employee = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  social: DS.attr('string'),
  description: DS.attr('string'),
  
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName')
  }.property('firstName', 'lastName')
});

App.Employee.reopenClass({
  // pass this method an object with the attributes we want to assign to a company, 
  // and it tells us if this collection of attributes is valid or not.
  valid: function(fields) {
    return fields.firstName && fields.lastName
  }
});