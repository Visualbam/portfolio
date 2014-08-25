App.Company = DS.Model.extend({
  companyName: DS.attr('string'),
  jobTitle: DS.attr('string'),
  jobDescription: DS.attr('string'),
  date: DS.attr('string'),
  location: DS.attr('string'),
  
  dateLocation: function() {
    return this.get('date') + ' | ' + this.get('location')
  }.property('date', 'location')
});