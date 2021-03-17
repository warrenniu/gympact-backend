class User < ApplicationRecord
    has_secure_password 

    has_many :memberships
    has_many :usergroups, through: :memberships
    has_many :invitations, :class_name => "Invite", :foreign_key => "recipient_id"
    has_many :sent_invites, :class_name => "Invite", :foreign_key => "sender_id"

    validates :email,:username, uniqueness: true, presence: true

 
end