class SessionController < ApplicationController
  def new
  end

  def create
    user = User.find_by :email => params[:email]
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:message] = "Welcome back, #{ user.name }"
      redirect_to root_path
    else
      flash[:message] = "Invalid email or password. Please try again."
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
