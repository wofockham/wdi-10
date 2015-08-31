Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/home' => 'pages#home'
  get '/faq' => 'pages#faq'
  get '/about' => 'pages#about'
  get '/funny' => 'pages#lol'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calculate'
end
