# @results.each do |key, result|
#   json.set! key do
#     json.song_name result[:song_name]
#     json.album_name result[:id]
#     json.name result[:name]
#     json.pic asset_path(result[:pic].url(:thumb))
#   end
# end

formatted = Hash.new { |h1, k1| h1[k1] = Hash.new { |h2, k2| h2[k2] = [] } }

@results.each do |result|
  formatted[result.artist.artist_name][result.album.album_name] << result.song_name
end

formatted.each do |artist, albums|
  json.set! artist do
    json.albums albums
  end
end
