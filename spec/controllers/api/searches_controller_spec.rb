require 'rails_helper'

RSpec.describe Api::SearchesController, type: :controller do
  describe 'index' do
    it 'renders the index template' do
      get :index, search: { song: 'e', album: 'e', artist: 'e' }
      expect(response).to render_template('index')
    end
  end
end
