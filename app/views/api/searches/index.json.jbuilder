# Nesting results ex: { artist: { album1: [song1, song2], album2: [songs] } }

formatted = Hash.new { |h1, k1| h1[k1] = Hash.new { |h2, k2| h2[k2] = [] } }

@results.each do |r|
  formatted[r.artist.artist_name][r.album.album_name] << r.song_name
end

formatted.each do |artist, albums|
  json.set! artist do
    json.albums albums
  end
end
