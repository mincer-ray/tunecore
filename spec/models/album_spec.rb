require 'rails_helper'

RSpec.describe Album, type: :model do
  it { should validate_presence_of(:album_name) }

  it { should belong_to(:artist) }
  it { should have_many(:songs) }
end
