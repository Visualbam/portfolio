App.Employee = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  social: DS.attr('string'),
  description: DS.attr('string')
});