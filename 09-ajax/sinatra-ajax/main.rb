require 'sinatra'
require 'sinatra/reloader'
require 'json'

get '/' do
  erb :home
end

get '/time' do
  Time.now.to_s
end

get '/info' do
  info = {
    :time => Time.now.to_s,
    :lucky_number => Random.rand(1..500).to_s,
    :uptime => `uptime`.chomp
  }

  info.to_json
end

get '/lucky' do
  Random.rand(1..500).to_s
end
