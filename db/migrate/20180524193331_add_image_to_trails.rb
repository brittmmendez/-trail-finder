class AddImageToTrails < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :image, :string
  end
end
