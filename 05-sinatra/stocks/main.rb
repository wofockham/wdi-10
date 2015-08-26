require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  erb :form
end

get '/lookup' do
  @stock_symbol = params[:stocksymbol].upcase
  unless @stock_symbol.empty?
    info = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_symbol)
    @price = info[@stock_symbol].lastTrade
  end
  erb :lookup
end
