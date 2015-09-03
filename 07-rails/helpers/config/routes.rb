Rails.application.routes.draw do
  # "/"
  root :to => 'pages#home'

  get '/numbers' => 'pages#numbers'
  get '/client_is_an_idiot' => 'pages#text', :as => 'text'
  get '/assets' => 'pages#assets' # !!!
  get '/url' => 'pages#url'

end
