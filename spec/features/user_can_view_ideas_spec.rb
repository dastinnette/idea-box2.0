require 'rails_helper'

RSpec.feature "user visits root" do

  it "renders view and displays idea fields" do
    visit root_path

    expect(page.status_code).to eq(200)
    expect(page).to have_content("Ideabox")

    within('.new-idea') do
      expect(page).to have_content 'Save Idea'
    end

    within('.search-field') do
      expect(page).to have_content 'Search for an idea or click on an idea\'s
                                    title or description to edit'
    end
  end

end
