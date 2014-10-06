// For more information see: http://emberjs.com/guides/routing/

// Set the rootURL to '/' so Ember knows where to start parsing the url from.
App.Router.reopen({
  location: 'auto',
  rootURL: '/'
});

App.Router.map(function() {
  this.resource('portfolio', { path: '/portfolio'} );
  this.resource('tapdat', { path: '/tapdat'} );
  this.resource('brunner', { path: '/brunner'} );
  this.resource('employees', { path: '/brunner' }, function() {
    this.route('new');
    this.resource('employee', { path: '/:id' }, function(){
      this.route('edit');
    });
  });
  this.resource('companies', { path: '/resume' }, function() {
    this.route('new');
    this.resource('company', { path: '/:id' }, function(){
      // This route is going to look for a CompanyEdit controller, view, and template.
      this.route('edit');
    });
  });
});
