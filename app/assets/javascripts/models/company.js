App.Company = DS.Model.extend({
  companyName: DS.attr('string'),
  jobTitle: DS.attr('string'),
  jobDescription: DS.attr('string'),
  date: DS.attr('string'),
  location: DS.attr('string')
});