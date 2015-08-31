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
  # butterfly = Butterfly.new
  # butterfly.name = params['name']
  # butterfly.family = params['family']
  # butterfly.image = params['image']

  # butterfly.save

  @butterfly = Butterfly.create :name => params[:name], :family => params[:family], :image => params[:image]

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
  # query_db "UPDATE butterflies SET name='#{ params['name'] }', family='#{ params['family']}', image='#{ params['image'] }' WHERE id = #{ params['id'] }"
  butterfly = Butterfly.find params[:id]
  # butterfly.name = params[:name]
  # butterfly.family = params[:family]
  # butterfly.image = params[:image]

  # butterfly.save

  butterfly.update :name => params[:name], :family => params[:family], :image => params[:image]

  redirect to "/butterflies/#{ butterfly.id }"
end

get '/plants' do
  @plants = Plant.all
  erb :'plants/index'
end

get '/plants/:id' do
  @plant = Plant.find params[:id]
  erb :'plants/show'
end








