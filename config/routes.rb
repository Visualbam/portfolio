Portfolio::Application.routes.draw do
  
  
  root :to => "static_pages#home"
  # Static pages
  get "/resume" => 'static_pages#resume'
  get "/portfolio" => 'static_pages#portfolio'
  get "/blog" => "static_pages#blog"
  get "/contact" => "static_pages#contact"

  resources :articles do
    resources :comments
  end

end
