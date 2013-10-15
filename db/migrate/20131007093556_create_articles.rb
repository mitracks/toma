class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.text :summary
      t.text :body
      t.boolean :home
      t.integer :position

      t.timestamps
    end
  end
end
