class Api::SearchesController < ApplicationController
  def index
    song_query = search_params[:song].downcase
    album_query = search_params[:album].downcase
    artist_query = search_params[:artist].downcase
    search_db = Song.joins(album: :artist)
    @results = search_db.where("
      LOWER(song_name) ~ ? AND
      LOWER(album_name) ~ ? AND
      LOWER(artist_name) ~ ?",
      song_query, album_query, artist_query).includes(:album, :artist)
  end

  private

  def search_params
    params.require(:search).permit(:artist, :album, :song)
  end
end
