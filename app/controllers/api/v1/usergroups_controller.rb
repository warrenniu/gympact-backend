class Api::V1::UsergroupsController < ApplicationController
    def index
        usergroups = Usergroup.all.includes(:users)
        render json: usergroups, except: [:created_at, :updated_at]
    end

    def show
        usergroup = Usergroup.find(params[:id])
        render json: usergroup   
    end



    def create
        usergroup = Usergroup.create!(usergroup_params)
        render json: usergroup
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
        params.permit(:name)
    end
end
