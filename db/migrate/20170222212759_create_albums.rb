class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :album_name, null: false
      t.integer :artist_id, null: false

      t.timestamps null: false
    end

    add_index :albums, :album_name
  end
end
