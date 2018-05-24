class AddLikesToTrails < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :likes, :integer
  end
end
