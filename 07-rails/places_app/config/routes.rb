Rails.application.routes.draw do
  get '/maps' => 'places#maps'
  resources :places
end
