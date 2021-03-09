class AddUserIdProposalIdDescriptionToWorkoutPost < ActiveRecord::Migration[6.0]
  def change
    add_column :workout_posts, :user_id, :integer
    add_column :workout_posts, :proposal_id, :integer
    add_column :workout_posts, :description, :string
  end
end
