class UsersController < ApplicationController

    #POST /user
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
      end
    
  #GET /me
      def show
        render json: @current_user
      end
    
      private
    
      def user_params
        params.permit(:username, :password)
      end
end
