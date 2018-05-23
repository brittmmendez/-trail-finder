class TrailsController < ApplicationController
before_action :set_trail, only: [:show, :edit, :update]

  def index
    @trails = Trail.all
    render json: @trails
  end

  def new
    @trail = Trail.new
  end

  def create
    @trail = Trail.new(trail_params)
    if @trail.save
      render json: @trail, status: 200
    else
      render json: {error: "Something went wrong."}, status: 400
    end
  end

  def show
    render json: @trail
  end

  def edit
  end

  def update
    if @trail.update(trail_params)
      render json: @trail, status: 200
    else
      render json: {error: "Something went wrong."}, status: 400
    end
  end

  private

  def set_trail
    @trail = Trail.find_by(id: params[:id])
  end

  def trail_params
    params.require(:trail).permit(:name, :distance, :description)
  end
end
