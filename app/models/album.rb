class Album < ActiveRecord::Base
  validates :album_name, presence: true

  belongs_to :artist

  has_many :songs
end
