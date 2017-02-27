require 'rails_helper'
require 'byebug'

Capybara.javascript_driver = :webkit

feature 'searching the database', js: true do
  scenario 'index renders properly' do
    visit '/'
    expect(page).to have_content 'TuneDB'
  end

  feature 'running a search' do
    scenario 'shows search results' do
      artist = Artist.create!(artist_name: 'xxxx')
      album = artist.albums.create!(album_name: 'yyyy')
      album.songs.create!(song_name: 'zzzz')

      visit '/'
      # fill_in 'songName', with: 'zz'
      click_on 'submit'
      debugger

      expect(page).to have_content 'xxxx'
    end
  end
end
