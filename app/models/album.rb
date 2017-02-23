class Album < ActiveRecord::Base
  validates :album_name, presence: true

  belongs_to :artist

  has_many :songs

  accepts_nested_attributes_for :songs, allow_destroy: true
end
