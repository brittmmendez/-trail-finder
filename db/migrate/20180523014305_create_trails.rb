class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :name
      t.integer :distance
      t.text :description
      t.timestamps
    end
  end
end
