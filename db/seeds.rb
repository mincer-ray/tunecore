def generate_name
  random_words = [
    Faker::Team.creature.downcase,
    Faker::Hacker.noun.downcase,
    Faker::Hipster.word.downcase,
    Faker::Space.moon.downcase,
    Faker::Name.first_name.downcase,
    Faker::Commerce.color
  ].shuffle

  song_name = []
  rand(1..2).times { song_name << random_words.pop }
  song_name.join(' ')
end

def generate_songs
  track_list = {}

  (1..10).each do |num|
    track_list[num.to_s] = {
      song_name: generate_name
    }
  end

  track_list
end

10.times do
  Artist.create(artist_name: generate_name)
end

artists = Artist.all

artists.each do |artist|
  10.times do
    artist.albums.create(
      album_name: generate_name,
      songs_attributes: generate_songs
    )
  end
end
