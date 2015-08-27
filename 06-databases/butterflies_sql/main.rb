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

post '/butterflies' do
  query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{params['name']}', '#{params['family']}', '#{params['image']}')"
  redirect to '/butterflies'
end

get '/butterflies/:id' do
  @butterfly = query_db("SELECT * FROM butterflies WHERE id = #{ params[:id] }").first
  erb :'butterflies/show'
end

get '/butterflies/:id/delete' do
  query_db "DELETE FROM butterflies WHERE id = #{ params[:id] }"
  redirect to '/butterflies'
end

get '/butterflies/:id/edit' do
  @butterfly = query_db("SELECT * FROM butterflies WHERE id = #{ params[:id] }").first
  erb :'butterflies/edit'
end

post '/butterflies/:id' do
  query_db "UPDATE butterflies SET name='#{ params['name'] }', family='#{ params['family']}', image='#{ params['image'] }' WHERE id = #{ params['id'] }"
  redirect to "/butterflies/#{ params[:id] }"
end


def query_db(sql)
  puts sql

  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  @data = db.execute sql
  db.close

  @data # Return whatever we retrieved
end












