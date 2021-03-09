class AddAdminBalanceToMembership < ActiveRecord::Migration[6.0]
  def change
    add_column :memberships, :admin, :boolean
    add_column :memberships, :balance, :integer
  end
end
