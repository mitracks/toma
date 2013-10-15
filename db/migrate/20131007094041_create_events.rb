class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.text :description
      t.integer :position
      t.string :icon
      t.boolean :publish

      t.timestamps
    end
  end
end
