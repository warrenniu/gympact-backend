class CreateWorkoutPosts < ActiveRecord::Migration[6.0]
  def change
    create_table :workout_posts do |t|

      t.timestamps
    end
  end
end
