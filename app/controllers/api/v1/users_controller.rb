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
        # user = User.create!(user_params)

        # if user.valid?
        #     render json: user
        # else
        #     render json: {error: user.error}, status: :not_acceptable 
        # end

        user = User.new(user_params)
        

        if user.save
            render json: user
        else
            user = User.find_by(username: params[:user][:username])
            
            if user
            render json: {error: "Username already exists"}
            else
                render json: {error: "Email already exists"}
            end

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
