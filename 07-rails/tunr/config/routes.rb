Rails.application.routes.draw do
  root :to => 'pages#hamldemo'
  get '/hamldemo' => 'pages#hamldemo'
  resources :users
end
