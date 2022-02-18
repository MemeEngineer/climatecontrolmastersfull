class UsersController < ApplicationController

#GET /users
def index
  users = User.all
  render json: users, status: :ok
end

    #POST /users
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
      end
    
  #GET /users
      def show
        render json: @current_user
      end
    
      private
    
      def user_params
        params.permit(:username, :password)
      end
end
