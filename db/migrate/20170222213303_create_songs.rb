class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :song_name, null: false
      t.integer :album_id, null: false

      t.timestamps null: false
    end

    add_index :songs, :song_name
  end
end
