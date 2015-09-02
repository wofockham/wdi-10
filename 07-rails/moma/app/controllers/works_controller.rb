class WorksController < ApplicationController
  def index
    @works = Work.all
  end

  def show
    @work = Work.find params[:id]
  end

  def new
  end

  def edit
  end

  def destroy
    work = Work.find params[:id]
    work.destroy
    redirect_to works_path
  end
end
