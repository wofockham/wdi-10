require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.logger = Logger.new(STDERR)

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

require_relative './butterfly'
require_relative './plant'

after do
  ActiveRecord::Base.connection.close
end

get '/' do
  erb :home
end

get '/butterflies' do
  @butterflies = Butterfly.all
  erb :'butterflies/index'
end

get '/butterflies/new' do
  erb :'butterflies/new'
end

post '/butterflies' do
  butterfly = Butterfly.create :name => params[:name], :family => params[:family], :image => params[:image], :plant_id => params[:plant_id]

  redirect to "/butterflies/#{ butterfly.id }"
end

get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :'butterflies/show'
end

get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to '/butterflies'
end

get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :'butterflies/edit'
end

post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.update :name => params[:name], :family => params[:family], :image => params[:image], :plant_id => params[:plant_id]

  redirect to "/butterflies/#{ butterfly.id }"
end

get '/plants' do
  @plants = Plant.all
  erb :'plants/index'
end

get '/plants/new' do
  erb :'plants/new'
end

post '/plants' do
  plant = Plant.create :name => params[:name], :image => params[:image]
  redirect to "/plants/#{ plant.id }"
end

get '/plants/:id' do
  @plant = Plant.find params[:id]
  erb :'plants/show'
end

get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :'plants/edit'
end

post '/plants/:id' do
  plant = Plant.find params[:id]
  plant.update :name => params[:name], :image => params[:image]
  redirect to "/plants/#{ plant.id }"
end

get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy
  redirect to '/plants'
end








