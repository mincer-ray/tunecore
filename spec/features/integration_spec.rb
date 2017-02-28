require 'rails_helper'
require 'byebug'

Capybara.javascript_driver = :webkit

feature 'searching the database', js: true do
  scenario 'index renders properly' do
    visit '/'
    expect(page).to have_content 'TuneDB'
  end
end
