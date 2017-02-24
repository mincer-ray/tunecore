# Nesting results ex: { artist: { album1: [song1, song2], album2: [songs] } }

# formatted = Hash.new { |h1, k1| h1[k1] = Hash.new { |h2, k2| h2[k2] = [] } }
#
# @results.each do |r|
#   formatted[r.artist.artist_name][r.album.album_name] << r.song_name
# end
#
# formatted.each do |artist, albums|
#   json.set! artist do
#     json.albums albums
#   end
# end

@results.each do |result|
  json.set! result.id do
    json.song result.song_name
    json.album result.album.album_name
    json.artist result.artist.artist_name
  end
end
