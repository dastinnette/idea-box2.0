require 'rails_helper'

RSpec.feature "user visits homepage" do

  it "views ideas" do
    visit root_path

    expect(page.status_code).to eq(200)
    expect(page).to have_content("Ideabox")
  end

end
