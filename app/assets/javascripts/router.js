// For more information see: http://emberjs.com/guides/routing/

// Set the rootURL to '/' so Ember knows where to start parsing the url from.
App.Router.reopen({
  location: 'auto',
  rootURL: '/'
});

App.Router.map(function() {
  this.resource('companies', { path: '/resume' }, function() {
    this.resource('company', { path: '/:id' });
  });
});
