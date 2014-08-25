App.Company = DS.Model.extend({
  companyName: DS.attr('string'),
  jobTitle: DS.attr('string'),
  jobDescription: DS.attr('string'),
  date: DS.attr('string'),
  location: DS.attr('string'),

  dateLocation: function() {
    return this.get('date') + ' | ' + this.get('location')
  }.property('date', 'location'),

});

App.Company.reopenClass({
  // pass this method an object with the attributes we want to assign to a company, 
  // and it tells us if this collection of attributes is valid or not.
  valid: function(fields) {
    return fields.companyName && fields.jobTitle
  }
});