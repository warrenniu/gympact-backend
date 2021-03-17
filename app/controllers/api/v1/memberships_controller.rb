class Api::V1::MembershipsController < ApplicationController
    skip_before_action :authorized, only: [:create]


    def create
        membership = Membership.create!(membership_params)

        if membership.valid?
            render json: membership
        else
            render json: {error: 'failed to create membership'}, status: :not_acceptable
    
        end

    end

    def destroy
        membership = Membership.find(params[:id])
        membership.destroy!
        render json: {}
    end

private
    def membership_params
        params.permit(:user_id,:usergroup_id,:admin,:balance)
    end
end
