@results.each do |result|
  json.set! result.id do
    json.song result.song_name
    json.album result.album.album_name
    json.artist result.artist.artist_name
  end
end
