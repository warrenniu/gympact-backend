class Api::V1::UsergroupsController < ApplicationController
    skip_before_action :authorized, only: [:create,:show,:index]

    def index
        usergroups = Usergroup.all.includes(:users)
        render json: usergroups, except: [:created_at, :updated_at]
    end

    def show
        usergroup = Usergroup.find(params[:id])
        if usergroup
            
            if !!(usergroup.users.find{|user| user[:id] == params[:userid]})
                 render json: usergroup
        else
            render json: {error: "You are not a member of this group"}
            end
        end

       
    end



    def create
        usergroup = Usergroup.create!(usergroup_params)

        if usergroup.valid?
            render json: usergroup
        else
            render json: {error: "Failed to create group"}, status: :not_acceptable
        end

    end


    def update
        usergroup = Usergroup.find(params[:id])
        usergroup.update!(usergroup_params)
        render json: usergroup
    end


    def destroy
        usergroup = Usergroup.find(params[:id])
        usergroup.destroy!
        render json: {}
    end


    private

    def usergroup_params
        params.permit(:name,:pot,:wager,:weeks)
    end
end
