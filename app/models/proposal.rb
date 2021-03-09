class Proposal < ApplicationRecord
    belongs_to :user 
    belongs_to :usergroup
    has_many :workout_posts
end
