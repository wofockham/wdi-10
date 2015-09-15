Rails.application.routes.draw do
  root :to => 'pages#index'
  get '/lucky' => 'pages#lucky'
  get '/time' => 'pages#time'
  get '/info' => 'pages#info'
end
