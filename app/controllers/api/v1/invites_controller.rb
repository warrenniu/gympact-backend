class Api::V1::InvitesController < ApplicationController

    def create
            invite = Invite.create!(invites_params)

            if invite.valid?
                render json: invite
            else
                render json: {error: 'failed to create invite'}, status: :not_acceptable
        
            end
    
    end

    def destroy
        invite = Invite.find(params[:id])
        invite.destroy!
        render json: {}
    end



private 

    def invites_params
        params.permit(:sender_id,:recipient_id,:status,:usergroup_id)
    end

end
