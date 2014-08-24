Portfolio::Application.routes.draw do
  root to: 'home#index'
  
  # Create a catch-all Rails route to handle whatever arbitrary routes we create in Ember
  # otherwise we’ll get a 404 when we try to reload the page on an Ember subroute:
  get '*path', to: 'home#index'
end
