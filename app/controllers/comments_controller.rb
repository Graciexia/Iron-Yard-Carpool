class CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:show, :create, :update, :destroy]
  before_action :allowed_to_modify!, only: [:update, :destroy]
  def index
    render json: comment = Comment.all
  end

  def show
    render json: comment = Comment.find(params[:id])
  end


  def create
    comment = Comment.create(words: params[:words], user_id: @current_user.id, post_id: params[:post_id])
    render json: comment
  end


  def destroy
    if Comment.exists? (params[:id])
      deleted_comment = Comment.destroy (params[:id])
      render json: deleted_comment
    else
      render json: { error: 'Comment not found' }, status: 404
    end
  end

  private

  def allowed_to_modify!
    if Comment.exists? (params[:id])
      comment = Comment.find(params[:id])
      if params[:id].to_s != @current_user.id.to_s
        render json: { error: "User's can only update their own data." }, status: 403
      end
    else
      render json: { error: "Could not find the selected comment in the DB." }, status: 404
    end
  end
end
