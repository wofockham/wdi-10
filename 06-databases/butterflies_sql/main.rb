require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :'butterflies/index'
end

get '/butterflies/new' do
  erb :'butterflies/new'
end

post '/butterflies/create' do
  query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{params['name']}', '#{params['family']}', '#{params['image']}')"
  redirect to '/butterflies'
end

get '/butterflies/:id' do
  @butterfly = query_db("SELECT * FROM butterflies WHERE id = #{ params[:id] }").first
  erb :'butterflies/show'
end



def query_db(sql)
  puts sql

  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  @data = db.execute sql
  db.close

  @data # Return whatever we retrieved
end












