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

get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "the result is #{ result }"
end

get '/time' do
  Time.now.to_s
end