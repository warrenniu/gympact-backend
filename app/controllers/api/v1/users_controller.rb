class Api::V1::UsersController < ApplicationController

    def index
        users = User.all.includes(:usergroups)
        render json: users, except: [:created_at, :updated_at]
    end

    def show
        user = User.find(params[:id])
        render json: user   
    end



    def create
        user = User.create!(user_params)

        if user.valid?
            render json: user
        else
            render json: {error: 'failed to create user'}, status: :not_acceptablee    
        end
    end


    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user
    end


    def destroy
        user = User.find(params[:id])
        user.destroy!
        render json: {}
    end


    private

    def user_params
        params.require(:user).permit(:email, :username,:password,:first_name,:last_name)
    end
end
