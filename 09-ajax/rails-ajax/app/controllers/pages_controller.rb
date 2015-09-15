class PagesController < ApplicationController
  def index
  end

  def lucky
    render :text => Random.rand(1..40)
  end

  def time
    render :text => Time.now
  end

  def info
    info = {
      :time => Time.now.to_s,
      :lucky_number => Random.rand(1..500).to_s,
      :uptime => `uptime`.chomp
    }
    render :json => info
  end
end
