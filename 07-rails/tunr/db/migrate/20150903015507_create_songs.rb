class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.text :name
      t.text :filename
      t.integer :album_id
      t.integer :artist_id
      t.timestamps
    end
  end
end
