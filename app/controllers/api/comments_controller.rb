class Api::CommentsController < ApplicationController
  before_action :set_comment, only: [:show]

  def index
    @trail = Trail.find_by(id:params[:trail_id])
    @comments = @trail.comments
    render json: @comments
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment
      redirect_to :show
    else
      render :new
    end
  end

  def show
    render json: @trail
  end

  private

  def set_comment
    @comment = Comment.find_by(id:params[:id])
  end

  def comment_params
    params.require(:comment).permit(:trail_id, :comment)
  end
end
