require 'rails_helper'

RSpec.describe Idea, type: :model do

  it "has a default value of swill" do
    idea = Idea.create(title: "Wear more suspenders", body: "All day, erry day")

    expect(idea.quality).to eq("swill")
    expect(idea.quality).to_not eq("genius")
  end

end
