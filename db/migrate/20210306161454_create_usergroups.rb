class CreateUsergroups < ActiveRecord::Migration[6.0]
  def change
    create_table :usergroups do |t|
      t.string :name

      t.timestamps
    end
  end
end
