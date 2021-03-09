class AddUserIdUsergroupIdDaysToProposal < ActiveRecord::Migration[6.0]
  def change
    add_column :proposals, :user_id, :integer
    add_column :proposals, :usergroup_id, :integer
    add_column :proposals, :days, :integer
  end
end
