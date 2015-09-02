class WorksController < ApplicationController
  def index
    @works = Work.all
  end

  def show
  end

  def new
  end

  def edit
  end
end
