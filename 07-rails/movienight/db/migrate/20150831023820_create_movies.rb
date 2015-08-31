class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.text :title
      t.date :release_date
      t.text :classification
      t.boolean :copy

      t.timestamps null: false
    end
  end
end
