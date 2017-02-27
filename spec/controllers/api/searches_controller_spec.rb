require 'rails_helper'
require 'byebug'

RSpec.describe Api::SearchesController, type: :controller do
  render_views

  let(:json) { JSON.parse(response.body) }

  describe 'index' do
    it 'renders the result json' do
      artist = Artist.create!(artist_name: 'xxxx')
      album = artist.albums.create!(album_name: 'yyyy')
      song = album.songs.create!(song_name: 'zzzz')

      expected = { song.id.to_s => {
        'song' => song.song_name,
        'album' => album.album_name,
        'artist' => artist.artist_name
      } }

      get :index, format: :json, search: { song: 'zz', album: 'y', artist: 'x' }
      assert_equal expected, JSON.parse(response.body)
    end

    it 'renders empty if there are no results' do
      expected = {}
      get :index, format: :json, search: { song: 'zz', album: 'y', artist: 'x' }
      assert_equal expected, JSON.parse(response.body)
    end
  end
end
