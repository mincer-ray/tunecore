require 'rails_helper'

RSpec.describe Artist, type: :model do
  it { should validate_presence_of(:artist_name) }

  it { should have_many(:albums) }
  it { should have_many(:songs).through(:albums) }
end
