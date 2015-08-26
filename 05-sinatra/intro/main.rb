require 'sinatra'
require 'sinatra/reloader'

get '/' do
  "This is the homepage"
end

get '/hello' do
  "Hello world from Sinatra!"
end

get '/mother' do
  "Hi mom"
end

get '/hi/:name' do
  "Hi #{ params[:name]  }"
end

get '/time' do
  Time.now.to_s
end