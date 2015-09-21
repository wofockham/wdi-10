Rails.application.routes.draw do
  resources :secrets
  root :to => 'secrets#home'
end
