// sortProperties takes an array of strings. 
// These strings are the properties you want to sort by with the highest priority first.
App.CompaniesController = Ember.ArrayController.extend({
  sortProperties: ['companyName', 'location']
});