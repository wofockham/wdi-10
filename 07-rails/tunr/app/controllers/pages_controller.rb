class PagesController < ApplicationController
  def hamldemo
    if session[:user_id]
      @user = User.find session[:user_id]
    end
  end
end
