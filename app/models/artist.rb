class Artist < ActiveRecord::Base
  validates :artist_name, presence: true
  validates :artist_name, uniqueness: true

  has_many :albums
  has_many :songs, through: :albums
end
