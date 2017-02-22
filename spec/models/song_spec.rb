require 'rails_helper'

RSpec.describe Song, type: :model do
  it { should validate_presence_of(:song_name) }

  it { should belong_to(:album) }
  it { should have_one(:artist).through(:album) }
end
