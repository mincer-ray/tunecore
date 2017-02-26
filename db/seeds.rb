require 'json'
require 'rest-client'

def generate_artists(name)
  p name
  artist_releases = JSON.parse(RestClient.get(
    "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums" \
    "&api_key=d1ce08767dd7cb3b5fe7762e6fcb181f" \
    "&artist=#{name}" \
    "&format=json" \
    "&limit=10"
  ).body)['topalbums']['album']
  artist = Artist.create(artist_name: artist_releases.first['artist']['name'])

  generate_albums(artist_releases, artist)
end

def generate_albums(artist_releases, artist)
  artist_releases.each do |release|
    p release
    tracks = JSON.parse(RestClient.get(
      "http://ws.audioscrobbler.com/2.0/?method=album.getinfo" \
      "&api_key=d1ce08767dd7cb3b5fe7762e6fcb181f" \
      "&artist=#{release['artist']['name']}" \
      "&album=#{release['name']}" \
      "&format=json"
    ).body)['album']['tracks']['track']

    artist.albums.create(
      album_name: release['name'],
      songs_attributes: format_songs_attributes(tracks)
    )
  end
end

def format_songs_attributes(songs)
  track_list = {}

  songs.each_with_index do |song, i|
    track_list[i] = {
      song_name: song['name']
    }
  end

  track_list
end

artists = [
  'prince', 'the_beatles', 'the_pixies', 'the_smiths', 'guided_by_voices',
  'built_to_spill', 'jethro_tull', 'the_cars', 'blondie', 'kraftwerk',
  'nas', 'pink_floyd', 'tycho'
]

artists.each do |name|
  generate_artists(name)
end
