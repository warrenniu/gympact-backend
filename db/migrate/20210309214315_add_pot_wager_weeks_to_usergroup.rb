class AddPotWagerWeeksToUsergroup < ActiveRecord::Migration[6.0]
  def change
    add_column :usergroups, :pot, :integer
    add_column :usergroups, :wager, :integer
    add_column :usergroups, :weeks, :integer
  end
end
